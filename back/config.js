require("dotenv").config()
const env = process.env

const config = {
<<<<<<< HEAD
  port: env.PORT,
  salt: env.SALT,
  db: {
    development: {
      username: env.DB_USER || "foo",
      password: env.DB_PASSWORD || "boo",
      port: env.DB_PORT || "1234",
      database: env.DB_DATABASE || "",
      dialect: env.DB_DIALECT,
      define: {
        freezeTableName: true,
        timestamps: false,
      },
=======
    port: env.PORT,
    db: {
        development: {
            username: env.DB_USER || "foo",
            password: env.DB_PASSWORD || "1q2w3e4r!",
            port: env.DB_PORT || "1234",
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
            database: "isReal",
            dialect: env.DB_DIALECT || "",
            define: {
                freezeTableName: true,
                timestamps: false,
            },
        },
>>>>>>> main
    },
}

module.exports = config
