import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { PER_CAPITA_USD_QUERY_ALL } from "../queries";
import { QueryResponse } from "../querytypes";
import CommonGraphComponent from "../graph/commonGraphComponent";
import { Spinner } from "react-bootstrap";

interface Props {
  year: number;
}

const PerCapitaUsdComponent: React.FunctionComponent<Props> = ({ year }) => {

  const { loading, data } = useQuery<QueryResponse>(PER_CAPITA_USD_QUERY_ALL, {
    variables: { year: year },
  });

  const getGraph = (loading: boolean, data: QueryResponse | undefined) => {
    if (loading) return <Spinner animation="grow" />
    if (data === undefined) return
    return <CommonGraphComponent input={[
      data.healthExpenditures.perCapitaUsd.governmentExpPerCapitaUsd.map((g) => { return { x: g.country, y: g.value, label: "government expenditure" } }),
      data.healthExpenditures.perCapitaUsd.privateExpPerCapitaUsd.map((g) => { return { x: g.country, y: g.value, label: "private expenditure" } })
    ]}
      yaxisLabel={(x) => (`$${x / 1000}k`)} />
  }

  return (
    <>
      <h4>Health expenditure per capita in USD</h4>
      {getGraph(loading, data)}
    </>
  );
};

export default PerCapitaUsdComponent;