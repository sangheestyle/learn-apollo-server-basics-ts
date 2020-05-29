"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const graphql_depth_limit_1 = __importDefault(require("graphql-depth-limit"));
const http_1 = require("http");
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const schema_1 = __importDefault(require("./schema"));
const app = express_1.default();
const server = new apollo_server_express_1.ApolloServer({
    schema: schema_1.default,
    validationRules: [graphql_depth_limit_1.default(7)],
    playground: true,
});
app.use('*', cors_1.default());
app.use(compression_1.default());
server.applyMiddleware({ app, path: '/graphql' });
const httpServer = http_1.createServer(app);
httpServer.listen({ port: 3000 }, () => console.log('GraphQL server is now running on http://localhost:3000/graphql'));
