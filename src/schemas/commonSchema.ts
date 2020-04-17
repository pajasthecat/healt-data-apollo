import { GraphQLString, GraphQLFloat, GraphQLObjectType } from "graphql";

export const ContentType = new GraphQLObjectType({
  name: "ContentType",
  fields: () => ({
    country: { type: GraphQLString },
    value: { type: GraphQLFloat },
  }),
});
