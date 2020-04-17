import { GraphQLObjectType, GraphQLSchema, GraphQLInt } from "graphql";
import {
  HealthExpenditureType,
  getHealthExpenditureResolvers,
} from "./healthExpSchema";
import { PopDensityType, getPopDensityResolvers } from "./popDensitySchema";

const rootQuery = new GraphQLObjectType({
  name: "rootQuery",
  fields: {
    healthExpenditures: {
      type: HealthExpenditureType,
      args: {
        year: { type: GraphQLInt },
      },
      resolve(_, args) {
        return getHealthExpenditureResolvers(args);
      },
    },
    popDensity: {
      type: PopDensityType,
      args: {
        year: { type: GraphQLInt },
      },
      resolve(_, args) {
        return getPopDensityResolvers(args);
      },
    },
  },
});

export = new GraphQLSchema({
  query: rootQuery,
});
