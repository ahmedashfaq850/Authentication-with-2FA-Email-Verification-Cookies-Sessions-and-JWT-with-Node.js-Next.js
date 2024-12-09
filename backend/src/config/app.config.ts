import { getEnv } from "../common/utils/get-env";

const appConfig = () => (
    {
    NODE_ENV: getEnv("NODE_ENV", "development"),
    PORT: getEnv("PORT", "8000"),
    APP_ORIGIN: getEnv("APP_ORIGIN", "http://localhost:3000"),
    BASE_PATH: getEnv("BASE_PATH", "/api/v1"),
    JWT: {
        SECRET: getEnv("JWT_SECRET"),
        EXPIRES_IN: getEnv("JWT_EXPIRES_IN", "15min"),
        REFRESH_SECRET: getEnv("JWT_REFRESH_SECRET"),
        REFRESH_EXPIRES_IN: getEnv("JWT_REFRESH_EXPIRES_IN", "30d"),
    }
}
)

export const config = appConfig();