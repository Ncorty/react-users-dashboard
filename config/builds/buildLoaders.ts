import { ModuleOptions } from "webpack"



export const buildLoaders = (): ModuleOptions["rules"] => {
    return [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }
];
}