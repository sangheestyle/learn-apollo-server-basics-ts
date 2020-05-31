import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';


const app : express.Application = express();

const server = new ApolloServer({

    /*
      schema is the essential piece,
      which in fact includes
      gql type definition and resolvers. 
     */
    schema,

    // not sure what validationRules is doing.
    validationRules: [depthLimit(7)],

    // not sure if this is needed conventionally.
    playground: true,
});


// not sure what cors is doing here. 
app.use('*', cors());

// not sure
app.use(compression());

// not sure
server.applyMiddleware(
    { app, path: '/graphql' });

const httpServer = createServer(app);


/*
maybe having port number conditional would be
a better conventionally.
 */
httpServer.listen(
    { port: 3000 },
    ():void => console.log(
    'GraphQL server is now running on http://localhost:3000/graphql'));
