import { Configuration } from "webpack";
import path from "path";

export const buildResolve = (srcPath: string): Configuration["resolve"] => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias:{
            '@pages': path.resolve(srcPath, 'pages'),
            '@': srcPath,
        }
    };
}  