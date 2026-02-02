import { Configuration } from "webpack";

export const buildResolve = (): Configuration["resolve"] => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    };
}  