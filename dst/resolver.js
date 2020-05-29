"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolverMap = {
    Query: {
        helloWorld(_, args, cts, info) {
            return `hello world, darren! can you see this?`;
        },
    },
};
exports.default = resolverMap;
