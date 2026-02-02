import { BuildOptions } from "../types/types";
import { type Configuration as DevServerConfiguration } from "webpack-dev-server";

export const buildDevServer = (env: BuildOptions): DevServerConfiguration => {
    return {
        port: env.port ?? 3001,
        open:true
    }
}