require("dotenv").config();
const env = process.env;

const config = {
  port: env.PORT,
  salt: env.SALT,
  db: {
    development: {
      username: env.DB_USER || "foo",
      password: env.DB_PASSWORD || "1q2w3e4r!",
      port: env.DB_PORT || "1234",
      host: env.DB_HOST || "0.0.0.0",
      database: env.DB_DATABASE || "",
      dialect: env.DB_DIALECT,
      define: {
        freezeTableName: true,
        timestamps: false,
      },
    },
    test: {
      username: "foo",
      password: "boo",
      port: "1234",
      host: "0.0.0.0",
      database: "isReal",
      dialect: env.DB_DIALECT || "",
      define: {
        freezeTableName: true,
        timestamps: false,
      },
    },
  },
};

module.exports = config;
