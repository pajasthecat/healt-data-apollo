import { GraphQLObjectType, GraphQLFloat, GraphQLList } from "graphql";
import {
  getTotalExpPerCapitaUsd,
  getTotalExpAsPartOfGDP,
  getGovernmentExpOfTotalExp,
  getPrivateExpOfTotalExp,
  getOutOfPocketExpOfTotalExp,
  getPrivateExpPerCapitaUsd,
  getOutOfPocketExpPerCapitaUsd,
  getGovernmentExpPerCapitaUsd,
  getHospitalBeds1000,
} from "../clients/worldBankClient";
import { ContentType } from "./commonSchema";

export const HealthExpenditureType = new GraphQLObjectType({
  name: "HealthExpenditures",
  fields: () => ({
    totalExpAsPartOfGDP: { type: GraphQLFloat },
    percentOfTotalExpenditure: { type: PercentOfTotalExpenditureType },
    perCapitaUsd: { type: PerCapitaUsdType },
    hospitalBeds: { type: GraphQLList(ContentType) },
  }),
});

const PercentOfTotalExpenditureType = new GraphQLObjectType({
  name: "PercentOfTotalExpenditure",
  fields: () => ({
    governmentExpOfTotalExp: { type: GraphQLList(ContentType) },
    privateExpOfTotalExp: { type: GraphQLList(ContentType) },
    outOfPocketExpOfTotalExp: { type: GraphQLList(ContentType) },
  }),
});

const PerCapitaUsdType = new GraphQLObjectType({
  name: "PerCapitaUsd",
  fields: () => ({
    totalExpPerCapitaUsd: { type: GraphQLList(ContentType) },
    governmentExpPerCapitaUsd: { type: GraphQLList(ContentType) },
    outOfPocketExpPerCapitaUsd: { type: GraphQLList(ContentType) },
    privateExpPerCapitaUsd: { type: GraphQLList(ContentType) },
  }),
});

export const getHealthExpenditureResolvers = (args: any) => {
  return {
    totalExpAsPartOfGDP: getTotalExpAsPartOfGDP(args.year).then((res) => {
      return res;
    }),
    percentOfTotalExpenditure: {
      governmentExpOfTotalExp: getGovernmentExpOfTotalExp(args.year).then(
        (res) => {
          return res;
        }
      ),
      privateExpOfTotalExp: getPrivateExpOfTotalExp(args.year).then((res) => {
        return res;
      }),
      outOfPocketExpOfTotalExp: getOutOfPocketExpOfTotalExp(args.year).then(
        (res) => {
          return res;
        }
      ),
    },
    hospitalBeds: getHospitalBeds1000(args.year).then((res) => {
      return res;
    }),
    perCapitaUsd: {
      totalExpPerCapitaUsd: getTotalExpPerCapitaUsd(args.year).then((res) => {
        return res;
      }),
      governmentExpPerCapitaUsd: getGovernmentExpPerCapitaUsd(args.year).then(
        (res) => {
          return res;
        }
      ),
      outOfPocketExpPerCapitaUsd: getOutOfPocketExpPerCapitaUsd(args.year).then(
        (res) => {
          return res;
        }
      ),
      privateExpPerCapitaUsd: getPrivateExpPerCapitaUsd(args.year).then(
        (res) => {
          return res;
        }
      ),
    },
  };
};
