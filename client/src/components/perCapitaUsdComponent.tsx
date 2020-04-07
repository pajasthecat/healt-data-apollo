import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import ResponsiveGridLayout from 'react-grid-layout';
import { ApolloError } from "apollo-boost";

interface Props {
  countryCode: string;
  year: number;
}

interface PerCapitaUsd {
  totalExpPerCapitaUsd: number,
  governmentExpPerCapitaUsd: number,
  outOfPocketExpPerCapitaUsd: number,
  privateExpPerCapitaUsd: number,
}
interface Response {
  healthExpenditures: HealthExpendituresResponse
}

interface HealthExpendituresResponse {
  perCapitaUsd: PerCapitaUsd
}

const PerCapitaUsdComponent: React.FunctionComponent<Props> = ({ countryCode, year }) => {
  const PER_CAPITA_USD_QUERY = gql`
    query PerCapitaUsdQuery ($countryCode: String!, $year: Int!) {
      healthExpenditures(year:$year, countryCode:$countryCode){
        perCapitaUsd {
          totalExpPerCapitaUsd
          governmentExpPerCapitaUsd
          privateExpPerCapitaUsd
        }
      }
    }
  `;

  const { loading, error, data } = useQuery<Response>(PER_CAPITA_USD_QUERY, {
    variables: { countryCode: countryCode, year: year },
  });

  const makeQuery = (loading: boolean, error: ApolloError | undefined, data: Response | undefined) => {
    if (loading) return <p>Loading...</p>
    if (error) console.log(error);
    console.log(data);
    return <div>
      <p> Total: {data?.healthExpenditures.perCapitaUsd.totalExpPerCapitaUsd}</p>
      <p> Government: {data?.healthExpenditures.perCapitaUsd.governmentExpPerCapitaUsd}</p>
      <p>Private: {data?.healthExpenditures.perCapitaUsd.privateExpPerCapitaUsd}</p>
    </div>
  }

  return (
    <ResponsiveGridLayout className="layout" cols={12} rowHeight={30} width={1200}>
      <div key="a" data-grid={{ x: 0, y: 0, w: 4, h: 10 }} style={{ backgroundColor: 'white', padding: 20, border: '1px solid #DCDCDC', boxShadow: " -1px 1px #DCDCDC, -2px 2px #DCDCDC ,-3px 3px #DCDCDC, -4px 4px #DCDCDC, -5px 5px #DCDCDC, -6px 6px #DCDCDC, -7px 7px #DCDCDC" }}>
        <h4>Health expenditure per capita in USD</h4>
        {makeQuery(loading, error, data)}
      </div>
    </ResponsiveGridLayout>
  );
};

export default PerCapitaUsdComponent;
