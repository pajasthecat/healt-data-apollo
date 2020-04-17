import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { PERC_OF_TOTAL_EXP_QUERY_ALL } from "../queries";
import { QueryResponse } from "../querytypes";
import CommonGraphComponent from "../graph/commonGraphComponent";
import { Spinner } from "react-bootstrap";

interface Props {
    year: number;
}

const PercentOfTotalExpenditureComponent: React.FunctionComponent<Props> = ({ year }) => {

    const { loading, data } = useQuery<QueryResponse>(PERC_OF_TOTAL_EXP_QUERY_ALL, {
        variables: { year: year },
    });

    const getGraph = (loading: boolean, data: QueryResponse | undefined) => {
        if (loading) return <Spinner animation="grow" />
        if (data === undefined) return
        return <CommonGraphComponent input={[
            data.healthExpenditures.percentOfTotalExpenditure.outOfPocketExpOfTotalExp.map((g) => { return { x: g.country, y: g.value, label: "government expenditure" } }),
            data.healthExpenditures.percentOfTotalExpenditure.governmentExpOfTotalExp.map((g) => { return { x: g.country, y: g.value, label: "private expenditure" } }),
            data.healthExpenditures.percentOfTotalExpenditure.privateExpOfTotalExp.map((g) => { return { x: g.country, y: g.value, label: "private expenditure" } })
        ]}
            yaxisLabel={(x) => (`${x}%`)} />
    }

    return (
        <div>
            <h4>Percent of total exp spent on healthcare.</h4>
            {getGraph(loading, data)}
        </div>
    );
};

export default PercentOfTotalExpenditureComponent;