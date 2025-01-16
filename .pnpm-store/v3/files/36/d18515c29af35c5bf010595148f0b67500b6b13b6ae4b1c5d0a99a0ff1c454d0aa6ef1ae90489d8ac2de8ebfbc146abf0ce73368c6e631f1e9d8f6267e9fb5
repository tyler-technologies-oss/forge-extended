"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.junitReporter = void 0;
require("array-flat-polyfill");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const xml_1 = __importDefault(require("xml"));
const assignSessionAndSuitePropertiesToTests = (_a) => {
    var _b;
    var { testResults } = _a, rest = __rest(_a, ["testResults"]);
    const assignToTest = (parentSuiteName) => (test) => {
        const suiteName = parentSuiteName.replace(/^\s+/, '');
        return Object.assign(Object.assign(Object.assign({}, test), rest), { suiteName });
    };
    const assignToSuite = (parentSuiteName) => (suite) => {
        var _a, _b, _c;
        return [
            ...suite.tests.map(assignToTest(`${parentSuiteName} ${suite.name}`)),
            ...((_c = (_b = (_a = suite.suites) === null || _a === void 0 ? void 0 : _a.flatMap) === null || _b === void 0 ? void 0 : _b.call(_a, assignToSuite(`${parentSuiteName} ${suite.name}`))) !== null && _c !== void 0 ? _c : []),
        ];
    };
    const suites = (_b = testResults === null || testResults === void 0 ? void 0 : testResults.suites) !== null && _b !== void 0 ? _b : [];
    return suites.flatMap(assignToSuite(''));
};
const toResultsWithMetadataByBrowserTestFileName = (acc, test) => {
    var _a;
    const testSuiteName = `${test.browser.name}_${test.browser.type}_${test.testFile.replace(process.cwd(), '')}`;
    return Object.assign(Object.assign({}, acc), { [testSuiteName]: [...((_a = acc[testSuiteName]) !== null && _a !== void 0 ? _a : []), test] });
};
const escapeLogs = (test) => test.logs.flatMap(x => x.map(_cdata => ({ _cdata: stripXMLInvalidChars(_cdata) })));
const isFailedTest = (test) => 
// NB: shouldn't have to check for `error`,
// but ATM all tests are coming back `passed: false`
!test.passed && !!test.error;
const isSkippedTest = (test) => !!test.skipped;
const addSuiteTime = (time, test) => time + (test.duration || 0) / 1000;
const getTestName = test => test.name;
const getSuiteName = test => test.suiteName;
const getTestFile = test => test.testFile;
const getTestDurationInSeconds = ({ duration }) => (typeof duration === 'undefined' ? 0 : duration) / 1000;
// A subset of invalid characters as defined in http://www.w3.org/TR/xml/#charsets that can occur in e.g. stacktraces
// lifted from https://github.com/michaelleeallen/mocha-junit-reporter/blob/master/index.js (licensed MIT)
// other portions of code adapted from same
// regex lifted from https://github.com/MylesBorins/xml-sanitizer/ (licensed MIT)
const INVALID_CHARACTERS_REGEX = 
// eslint-disable-next-line no-control-regex
/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007f-\u0084\u0086-\u009f\uD800-\uDFFF\uFDD0-\uFDFF\uFFFF\uC008]/g;
const STACK_TRACE_UNIQUE_IDS_REGEX = /localhost:\d+|wtr-session-id=[\w\d]+-[\w\d]+-[\w\d]+-[\w\d]+-[\w\d]+|/g;
const stripXMLInvalidChars = (x) => x && x.replace ? x.replace(INVALID_CHARACTERS_REGEX, '') : x;
/**
 * Makes a `<failure>` element
 */
function testFailureXMLElement(test) {
    var _a, _b, _c;
    const { error } = test;
    const message = stripXMLInvalidChars((_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : '');
    const stack = stripXMLInvalidChars((_b = error === null || error === void 0 ? void 0 : error.stack) !== null && _b !== void 0 ? _b : '');
    const type = (_c = error === null || error === void 0 ? void 0 : error.name) !== null && _c !== void 0 ? _c : (stack.match(/^\w+Error:/) ? stack.split(':')[0] : '');
    return {
        _attr: { message, type },
        _cdata: `${type}: ${message}\n${stack}`.replace(STACK_TRACE_UNIQUE_IDS_REGEX, ''),
    };
}
/**
 * Makes attributes for a `<testcase>` element
 * @param test Test Result
 */
function testCaseXMLAttributes(test, rootDir) {
    var _a, _b, _c;
    const name = getTestName(test);
    const time = getTestDurationInSeconds(test);
    const classname = getSuiteName(test);
    const file = getTestFile(test).replace(`${rootDir}${path_1.default.sep}`, '');
    const [, line] = (_c = stripXMLInvalidChars((_b = (_a = test.error) === null || _a === void 0 ? void 0 : _a.stack) !== null && _b !== void 0 ? _b : '').match(/(\d+):\d+/m)) !== null && _c !== void 0 ? _c : [];
    return {
        _attr: Object.assign({ name,
            time,
            classname,
            file }, (!!line && { line })),
    };
}
/**
 * Makes a `<testcase>` element
 */
function testCaseXMLElement(test, rootDir) {
    const attributes = testCaseXMLAttributes(test, rootDir);
    // prettier-ignore
    if (isSkippedTest(test))
        return { testcase: [attributes, { skipped: null }] };
    else if (isFailedTest(test))
        return { testcase: [attributes, { failure: testFailureXMLElement(test) }] };
    else // prettier-ignore
        return { testcase: attributes };
}
/**
 * Makes attributes for a `<testsuite>` element
 * @param name Test Suite Name
 * @param id Test Run ID
 * @param results Test Results
 */
function testSuiteXMLAttributes(name, id, results) {
    const tests = results.length;
    const skipped = results.filter(x => x.skipped).length;
    const errors = results.map(x => x.error).filter(Boolean).length;
    const failures = results.filter(isFailedTest).length;
    const time = results.reduce(addSuiteTime, 0);
    return {
        _attr: {
            name,
            id,
            tests,
            skipped,
            errors,
            failures,
            time,
        },
    };
}
/**
 * Makes a `<properties>` element
 * @param testFile Absolute path to test file
 * @param browserName Short browser name
 * @param launcherType browser launcher type
 */
function testSuitePropertiesXMLElement(testFile, browserName, launcherType, rootDir) {
    return [
        {
            property: {
                _attr: {
                    name: 'test.fileName',
                    value: testFile.replace(`${rootDir}${path_1.default.sep}`, ''),
                },
            },
        },
        {
            property: {
                _attr: {
                    name: 'browser.name',
                    value: browserName,
                },
            },
        },
        {
            property: {
                _attr: {
                    name: 'browser.launcher',
                    value: launcherType,
                },
            },
        },
    ];
}
/**
 * Collates test sessions by browser, converts them to an XML object representation,
 * then stringifies the XML.
 * @param sessions Test Sessions
 */
function getTestRunXML({ reportLogs, rootDir, sessions, }) {
    const testsuites = Object.entries(sessions
        .flatMap(assignSessionAndSuitePropertiesToTests)
        .reduce(toResultsWithMetadataByBrowserTestFileName, {})).map(([name, tests]) => {
        var _a, _b;
        const [{ testRun = 0, browser, testFile }] = tests;
        const browserName = (_a = browser.name) !== null && _a !== void 0 ? _a : '';
        const launcherType = (_b = browser.type) !== null && _b !== void 0 ? _b : '';
        const attributes = testSuiteXMLAttributes(name, testRun, tests);
        const properties = testSuitePropertiesXMLElement(testFile, browserName, launcherType, rootDir);
        const testcases = tests.map(t => testCaseXMLElement(t, rootDir));
        const systemOut = !reportLogs ? [] : tests.flatMap(escapeLogs).map(x => ({ 'system-out': x }));
        const testsuite = [attributes, { properties }, ...testcases, ...systemOut];
        return { testsuite };
    });
    return (0, xml_1.default)({ testsuites }, { declaration: true, indent: '  ' });
}
/**
 * A JUnit-format XML file reporter for Web Test Runner
 *
 * @param args Options for JUnit Reporter
 */
function junitReporter({ outputPath = './test-results.xml', reportLogs = false, rootDir = process.cwd(), } = {}) {
    const filepath = path_1.default.resolve(rootDir, outputPath);
    const dir = path_1.default.dirname(filepath);
    return {
        onTestRunFinished({ sessions }) {
            const xml = getTestRunXML({ reportLogs, rootDir, sessions });
            fs_1.default.mkdirSync(dir, { recursive: true });
            fs_1.default.writeFileSync(filepath, xml);
        },
    };
}
exports.junitReporter = junitReporter;
//# sourceMappingURL=junitReporter.js.map