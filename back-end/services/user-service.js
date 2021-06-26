//Импортируем нужные пакеты
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mailService = require("./mail-service");
const tokenService = require("./token-service");
//Импортируем нужные сущности
const { User } = require("../data-base/postgreSQL/models/models");
const UserDto = require("../dtos/user-dto");
const ApiError = require("../errors/api-error");

class UserService {
  async registration(email, password, role) {
    //Проверяем есть ли в базе пользователь с таким email
    const candidate = await User.findOne({ where: { email } });
    //Если есть бросаем ошибку
    if (candidate) {
      throw ApiError.BadRequest(
        `Пользователь с таким e-mail адресом ${email} уже существует`
      );
    }
    //Если нет
    //Хэшируем пароль
    const hashPassword = await bcrypt.hash(password, 3);
    //Генерируем активационную часть ссылки
    const activationLink = uuid.v4();
    //Создаем нового пользователя в базе
    const user = await User.create({
      email,
      role,
      password: hashPassword,
      activationLink,
    });
    //Высылаем ссылку для активации на email пользователя
    await mailService.sendActivationMail(
      email,
      `${process.env.API_URL}/api/user/activate/${activationLink}`
    );
    //Убираем лишние данные у user
    const userDto = new UserDto(user);
    //Генерируем tokens
    const tokens = tokenService.generateTokens({ ...userDto });
    //Сохраняем tokens в базе
    await tokenService.saveToken(
      userDto.id,
      tokens.accessToken,
      tokens.refreshToken
    );
    return { ...tokens, user: userDto };
  }
  //активация аккаунта по ссылке из e-mail
  async activate(activationLink) {
    const user = await User.findOne({ where: { activationLink } });
    if (!user) {
      throw ApiError.BadRequest("Некорректная ссылка активации");
    }
    await user.update({ isActivated: true });
  }

  async login(email, password) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw ApiError.BadRequest("Пользователь с таким email не был найден");
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw ApiError.BadRequest("Пароль указан не верно");
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }
}

module.exports = new UserService();
