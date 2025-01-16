"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageNode = exports.EntryPointNode = exports.URL_PROTOCOL_NG = exports.URL_PROTOCOL_FILE = exports.TYPE_NG_ENTRY_POINT = exports.TYPE_NG_PACKAGE = void 0;
exports.isEntryPoint = isEntryPoint;
exports.isPackage = isPackage;
exports.byEntryPoint = byEntryPoint;
exports.isEntryPointInProgress = isEntryPointInProgress;
exports.isEntryPointDirty = isEntryPointDirty;
exports.isFileUrl = isFileUrl;
exports.fileUrl = fileUrl;
exports.fileUrlPath = fileUrlPath;
exports.ngUrl = ngUrl;
const typescript_1 = __importDefault(require("typescript"));
const file_cache_1 = require("../file-system/file-cache");
const node_1 = require("../graph/node");
const select_1 = require("../graph/select");
exports.TYPE_NG_PACKAGE = 'application/ng-package';
exports.TYPE_NG_ENTRY_POINT = 'application/ng-entry-point';
/** A node that can be read through the `fs` api. */
exports.URL_PROTOCOL_FILE = 'file://';
/** A node specific to angular. */
exports.URL_PROTOCOL_NG = 'ng://';
function isEntryPoint(node) {
    return node.type === exports.TYPE_NG_ENTRY_POINT;
}
function isPackage(node) {
    return node.type === exports.TYPE_NG_PACKAGE;
}
function byEntryPoint() {
    return (0, select_1.by)(isEntryPoint);
}
function isEntryPointInProgress() {
    return (0, select_1.by)(isEntryPoint).and(select_1.isInProgress);
}
function isEntryPointDirty() {
    return (0, select_1.by)(isEntryPoint).and(select_1.isDirty);
}
function isFileUrl(value) {
    return value.startsWith(exports.URL_PROTOCOL_FILE);
}
function fileUrl(path) {
    return `${exports.URL_PROTOCOL_FILE}${path}`;
}
function fileUrlPath(url) {
    if (url.startsWith(exports.URL_PROTOCOL_FILE)) {
        return url.substring(exports.URL_PROTOCOL_FILE.length);
    }
}
function ngUrl(path) {
    return `${exports.URL_PROTOCOL_NG}${path}`;
}
class EntryPointNode extends node_1.Node {
    constructor(url, sourcesFileCache, moduleResolutionCache) {
        super(url);
        this.url = url;
        this.type = exports.TYPE_NG_ENTRY_POINT;
        this.cache = {
            sourcesFileCache,
            analysesSourcesFileCache: new file_cache_1.FileCache(),
            moduleResolutionCache,
            outputCache: new Map(),
        };
    }
}
exports.EntryPointNode = EntryPointNode;
class PackageNode extends node_1.Node {
    constructor() {
        super(...arguments);
        this.type = exports.TYPE_NG_PACKAGE;
        this.cache = {
            sourcesFileCache: new file_cache_1.FileCache(),
            moduleResolutionCache: typescript_1.default.createModuleResolutionCache(process.cwd(), s => s),
        };
    }
}
exports.PackageNode = PackageNode;
//# sourceMappingURL=nodes.js.map