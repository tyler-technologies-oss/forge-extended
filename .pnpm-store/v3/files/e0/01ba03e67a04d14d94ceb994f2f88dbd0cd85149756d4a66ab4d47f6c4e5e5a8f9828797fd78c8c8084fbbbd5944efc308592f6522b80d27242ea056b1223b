"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserConfig = void 0;
const lilconfig_1 = require("lilconfig");
const defaultConfig = {
    babelOptions: {
        sourceType: 'unambiguous',
        plugins: [
            'typescript',
            ['decorators', { decoratorsBeforeExport: true }],
            'jsx'
        ],
        ranges: true
    }
};
/**
 * Gets the postcss-lit config from package.json if it exists
 * @param {string} key Config key to search for
 * @return {PackageConfig}
 */
function getUserConfig(key) {
    const result = (0, lilconfig_1.lilconfigSync)(key, {
        searchPlaces: ['package.json']
    }).search();
    const userConfig = result ? result.config : {};
    return {
        babelOptions: {
            ...defaultConfig.babelOptions,
            ...userConfig?.babelOptions
        }
    };
}
exports.getUserConfig = getUserConfig;
