import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { PER_CAPITA_USD_QUERY_ALL } from "../queries";
import { QueryResponse } from "../querytypes";
import CommonComponent from "../commonComponent";

interface Props {
  year: number;
}

const PerCapitaUsdComponent: React.FunctionComponent<Props> = ({ year }) => {

  const { loading, data } = useQuery<QueryResponse>(PER_CAPITA_USD_QUERY_ALL, {
    variables: { year: year },
  });

  if (data !== undefined) return (
    <CommonComponent
      yaxisLabel={(x) => (`$${x / 1000}k`)}
      header={`Health expenditure per capita in ${year}`}
      loading={loading}
      graphInput={[
        data.healthExpenditures.perCapitaUsd.governmentExpPerCapitaUsd
          .map((g) => { return { x: g.country, y: g.value, label: "government expenditure" } }),
        data.healthExpenditures.perCapitaUsd.privateExpPerCapitaUsd
          .map((g) => { return { x: g.country, y: g.value, label: "private expenditure" } })
      ]}
    />
  );

  return <></>
};

export default PerCapitaUsdComponent;