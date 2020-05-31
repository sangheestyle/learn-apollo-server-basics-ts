import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';


const app : express.Application = express();

const server = new ApolloServer({
    schema,
    validationRules: [depthLimit(7)],
    playground: true,
});

app.use('*', cors());
app.use(compression());
server.applyMiddleware(
    { app, path: '/graphql' });

const httpServer = createServer(app);

httpServer.listen(
    { port: 3000 },
    ():void => console.log(
    'GraphQL server is now running on http://localhost:3000/graphql'));
