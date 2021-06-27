const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
  avatar: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "USER",
  },
  isActivated: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  activationLink: {
    type: DataTypes.STRING,
  },
});

const Basket = sequelize.define("basket", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

const BasketDevice = sequelize.define("basketDevice", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

const Device = sequelize.define("device", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  article: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Type = sequelize.define("type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Brand = sequelize.define("brand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Rating = sequelize.define("rating", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, unique: true, allowNull: false },
});

const Token = sequelize.define("token", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  accessToken: { type: DataTypes.STRING, unique: true },
  refreshToken: { type: DataTypes.STRING, unique: true },
});

const DeviceInfo = sequelize.define("deviceInfo", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  describtion: { type: DataTypes.STRING, unique: true, allowNull: false },
});

//Связующая таблица
const TypeBrand = sequelize.define("typeBrand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
//Связи
//У одного пользователя - одна корзина
User.hasOne(Basket);
Basket.belongsTo(User);
//У одного пользователя - одна пара токенов
User.hasOne(Token);
Token.belongsTo(User);
//Один пользователь может иметь несколько оценок
User.hasMany(Rating);
Rating.belongsTo(User);
//В корзине может быть несколько устройств
Basket.hasMany(BasketDevice);
BasketDevice.belongsTo(Basket);
//Типу может принадлежать несколько устройств
Type.hasMany(Device);
Device.belongsTo(Type);
//Бренду может принадлежать несколько устройств
Brand.hasMany(Device);
Device.belongsTo(Brand);
//Устройство может иметь несколько оценок
Device.hasMany(Rating);
Rating.belongsTo(Device);

Device.hasMany(BasketDevice);
BasketDevice.belongsTo(Device);
//Устройство может иметь несколько полей описаний
Device.hasMany(DeviceInfo, { as: "info" });
DeviceInfo.belongsTo(Device);
//Тип устройства может принадлежать нескольким брендам
Type.belongsToMany(Brand, { through: TypeBrand });
//Бренд может принадлежать нескольким типам устройств
Brand.belongsToMany(Type, { through: TypeBrand });

module.exports = {
  User,
  Basket,
  BasketDevice,
  Device,
  Type,
  Brand,
  Rating,
  TypeBrand,
  DeviceInfo,
  Token,
};
