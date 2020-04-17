import { GraphQLObjectType, GraphQLList } from "graphql";
import { ContentType } from "./commonSchema";
import { getPopDensityPerSqKm } from "../clients/worldBankClient";

export const PopDensityType = new GraphQLObjectType({
  name: "PopDensity",
  fields: () => ({
    perSqKm: { type: GraphQLList(ContentType) },
  }),
});

export const getPopDensityResolvers = (args: any) => {
  return {
    perSqKm: getPopDensityPerSqKm(args.year).then((res: any) => {
      return res;
    }),
  };
};
