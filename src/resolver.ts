import { GraphQLResolveInfo } from 'graphql';
import { IResolvers } from 'graphql-tools';

const resolverMap:IResolvers = {
    Query: {
        helloWorld(
            _: void,
            args: void,
            cts: void,
            info: GraphQLResolveInfo)
        :string {
            return `hello world, darren! can you see this?`;
        },
    },
};

export default resolverMap;
