import { GraphQLObjectType, GraphQLSchema, GraphQLFloat, GraphQLString, GraphQLInt } from 'graphql';
import { getTotalExpPerCapitaUsd, getTotalExpAsPartOfGDP, getGovernmentExpOfTotalExp, getPrivateExpOfTotalExp, getOutOfPocketExpOfTotalExp, getPrivateExpPerCapitaUsd, getOutOfPocketExpPerCapitaUsd, getGovernmentExpPerCapitaUsd } from './clients/worldBankClient';

const HealthExpenditureType = new GraphQLObjectType({
    name: 'HealthExpenditures',
    fields: () => ({
        totalExpAsPartOfGDP: { type: GraphQLFloat},
        percentOfTotalExpenditure: {type: PercentOfTotalExpenditureType},
        perCapitaUsd: {type: PerCapitaUsdType}
    })
});

const PercentOfTotalExpenditureType = new GraphQLObjectType({
    name: 'PercentOfTotalExpenditure',
    fields: () => ({
        governmentExpOfTotalExp: {type: GraphQLFloat},
        privateExpOfTotalExp: {type: GraphQLFloat},
        outOfPocketExpOfTotalExp: {type: GraphQLFloat}
    })
});

const PerCapitaUsdType = new GraphQLObjectType({
    name: 'PerCapitaUsd',
    fields: () => ({
        totalExpPerCapitaUsd: { type: GraphQLFloat},
        governmentExpPerCapitaUsd: { type: GraphQLFloat},
        outOfPocketExpPerCapitaUsd: { type: GraphQLFloat},
        privateExpPerCapitaUsd: { type: GraphQLFloat},
    })
});

const rootQuery = new GraphQLObjectType({
    name: "rootQuery",
    fields:{
        healthExpenditures:{
            type: HealthExpenditureType,
            args: {
                countryCode: {type: GraphQLString},
                year: {type: GraphQLInt},
            },
             resolve(_, args) {
                return {
                    totalExpAsPartOfGDP: getTotalExpAsPartOfGDP(args.countryCode, args.year).then(res => {return res}),
                    percentOfTotalExpenditure: {
                        governmentExpOfTotalExp : getGovernmentExpOfTotalExp(args.countryCode, args.year).then(res => {return res}),
                        privateExpOfTotalExp : getPrivateExpOfTotalExp(args.countryCode, args.year).then(res => {return res}),
                        outOfPocketExpOfTotalExp : getOutOfPocketExpOfTotalExp(args.countryCode, args.year).then(res => {return res}),
                    },
                    perCapitaUsd: {
                        totalExpPerCapitaUsd: getTotalExpPerCapitaUsd(args.countryCode, args.year).then(res => {return res}),
                        governmentExpPerCapitaUsd: getGovernmentExpPerCapitaUsd(args.countryCode, args.year).then(res => {return res}),
                        outOfPocketExpPerCapitaUsd: getOutOfPocketExpPerCapitaUsd(args.countryCode, args.year).then(res => {return res}),
                        privateExpPerCapitaUsd: getPrivateExpPerCapitaUsd(args.countryCode, args.year).then(res => {return res}),
                    }
                } 
            }
        }
    }
});

export = new GraphQLSchema({
    query: rootQuery
});