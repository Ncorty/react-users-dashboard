import { Configuration } from "webpack";
import path from "path";

export const buildResolve = (srcPath: string): Configuration["resolve"] => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias:{
            '@pages': path.resolve(srcPath, 'pages'),
            '@entities': path.resolve(srcPath, 'entities'),
            '@shared': path.resolve(srcPath, 'shared'),
            '@features': path.resolve(srcPath, 'features'),
            '@widgets': path.resolve(srcPath, 'widgets'),
            '@app': path.resolve(srcPath, 'app'),
            '@': srcPath,
        }
    };
}  