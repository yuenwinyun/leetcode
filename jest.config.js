module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/*.(test|spec).ts"],
    transform: {
        "^.+\\.ts$": "ts-jest",
    },
    moduleFileExtensions: ["ts", "js"],
    moduleNameMapper: {
        "^util/(.*)$": "<rootDir>/util/$1",
    },
};
