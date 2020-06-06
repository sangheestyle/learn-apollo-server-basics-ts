import express from 'express';
import { ApolloServer, PubSub } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';

const app: express.Application = express();
export const pubsub = new PubSub();

const server = new ApolloServer({
    schema,
    validationRules: [depthLimit(7)],
    playground: true,
    context: async ({ req, connection }) => connection?.context,
});

app.use('*', cors());
app.use(compression());
server.applyMiddleware(
    { app, path: '/graphql' });

const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(
    { port: 3000 },
    (): void => console.log(
        'GraphQL server is now running on http://localhost:3000/graphql'));
