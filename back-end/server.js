require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const sequelize = require("./data-base/postgreSQL/config/config");
const models = require("./data-base/postgreSQL/models/models");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./midllewares/error-midlleware");
//--Подключение переменных окружения------------------------------
const { env } = require("process");

//----------------------------------------------------------------
const dbConnect = require("./data-base/mongoDB/config/config");

//--Создание экземпляра приложения--------------------------------
const app = express();

//--Подключение роутов--------------------------------------------
const indexRouter = require("./routes/userRouter");

//--Подключение midllewares---------------------------------------
app.use(morgan("dev")); //логирование запросов
app.use(express.json()); //возможность парсить json
app.use(cookieParser()); //возможность парсить cookies
app.use(cors()); //возможность отправлять запросы с front-end

//--Роутинг-------------------------------------------------------
app.use("/api", indexRouter);

//--Обработка ошибок----------------------------------------------
app.use(errorMiddleware);

//--Инициализация сервера-----------------------------------------
const PORT = process.env.PORT || 4000;
const startServer = () => {
  try {
    app.listen(PORT, async () => {
      console.clear();
      await sequelize.authenticate();
      await sequelize.sync();
      console.log(`Server has been started on PORT: ${PORT}`);
      console.log(`PSQL connected on PORT: ${process.env.DB_PORT}`);
      // dbConnect(); //<<-- Подключение базы данных MongoDB
    });
  } catch (error) {
    console.log(error);
  }
};
//--Запуск сервера------------------------------------------------
startServer();
