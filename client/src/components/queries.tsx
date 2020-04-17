import gql from "graphql-tag";

export const PER_CAPITA_USD_QUERY_ALL = gql`
query PerCapitaUsdQuery ( $year: Int!) {
  healthExpenditures(year:$year){
    perCapitaUsd {
      totalExpPerCapitaUsd{
        country
        value
      }
      privateExpPerCapitaUsd{
        country
        value
      }
      governmentExpPerCapitaUsd{
        country
        value
      }
    }
  }
}
`;

export const PERC_OF_TOTAL_EXP_QUERY_ALL = gql`
query PerCapitaUsdQuery ( $year: Int!) {
  healthExpenditures(year:$year){
    percentOfTotalExpenditure {
      governmentExpOfTotalExp{
        country
        value
      }
      privateExpOfTotalExp{
        country
        value
      }
      outOfPocketExpOfTotalExp{
        country
        value
      }
    }
  }
}
`;

export const HOSPITAL_BEDS = gql`
query PerCapitaUsdQuery ( $year: Int!) {
  healthExpenditures(year:$year){
    hospitalBeds{
      country
      value
    }
  }
}
`;

export const POP_DENSITY = gql`
query PerCapitaUsdQuery ( $year: Int!) {
  popDensity(year:$year){
    perSqKm {
      country
      value
    }
  }
}
`;