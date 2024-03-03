import { SequelizeModuleOptions } from "@nestjs/sequelize";
import modelIndex from "../index";

const {
    AUTH_DATABASE_DB_NAME: database = "auth",
    AUTH_DATABASE_DB_PORT: port = 5432,
    AUTH_DATABASE_DB_HOST: host = "auth-db",
    AUTH_DATABASE_USERNAME: username = "auth",
    AUTH_DATABASE_PASSWORD: password = "auth"
} = process.env

export default {
    dialect: 'postgres',
    host,
    port,
    username,
    password,
    database,
    models: Object.values(modelIndex)
} as SequelizeModuleOptions
