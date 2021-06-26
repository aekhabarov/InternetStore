const jwt = require("jsonwebtoken");
const { Token } = require("../data-base/postgreSQL/models/models");

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: "20m",
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: "20d",
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  validateAccessToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      return userData;
    } catch (error) {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
      return userData;
    } catch (error) {
      return null;
    }
  }

  async saveToken(userId, accessToken, refreshToken) {
    // console.log("userId ====>>>", userId);
    // console.log("accessToken ====>>>", accessToken);
    // console.log("refreshToken ====>>>", refreshToken);
    try {
      const tokenData = await Token.findOne({ where: { userId } });
      // console.log("tokenData ====>>>", tokenData);
      if (tokenData) {
        tokenData.update({ refreshToken });
        return tokenData;
      }
      const token = await Token.create({ userId, accessToken, refreshToken });
      return token;
    } catch (error) {
      console.log(error);
    }
  }

  async removeToken(refreshToken) {
    const tokenData = await Token.deleteOne({ refreshToken });
    return tokenData;
  }

  async findToken(refreshToken) {
    const tokenData = await Token.findOne({ refreshToken });
    return tokenData;
  }
}

module.exports = new TokenService();
