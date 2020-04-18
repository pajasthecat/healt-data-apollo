import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { PERC_OF_TOTAL_EXP_QUERY_ALL } from "../queries";
import { QueryResponse } from "../querytypes";
import CommonComponent from "../commonComponent";

interface Props {
    year: number;
}

const PercentOfTotalExpenditureComponent: React.FunctionComponent<Props> = ({ year }) => {

    const { loading, data } = useQuery<QueryResponse>(PERC_OF_TOTAL_EXP_QUERY_ALL, {
        variables: { year: year },
    });

    if (data !== undefined) return (
        <CommonComponent
            yaxisLabel={(x) => (`${x}%`)}
            header={`% of total exp spent on healthcare in ${year}`}
            loading={loading}
            graphInput={[
                data.healthExpenditures.percentOfTotalExpenditure.outOfPocketExpOfTotalExp
                    .map((g) => { return { x: g.country, y: g.value, label: "government expenditure" } }),
                data.healthExpenditures.percentOfTotalExpenditure.governmentExpOfTotalExp
                    .map((g) => { return { x: g.country, y: g.value, label: "private expenditure" } }),
                data.healthExpenditures.percentOfTotalExpenditure.privateExpOfTotalExp
                    .map((g) => { return { x: g.country, y: g.value, label: "private expenditure" } })]}
        />
    );
    return <></>
};

export default PercentOfTotalExpenditureComponent;