import React from "react";
import { QueryResponse } from "./querytypes";
import { POP_DENSITY } from "./queries";
import CommonGraphComponent from "./graph/commonGraphComponent";
import { useQuery } from "@apollo/react-hooks";
import { Spinner } from "react-bootstrap";

interface Props {
    year: number
}

const PopDensityComponent: React.FunctionComponent<Props> = ({ year }) => {
    const { loading, data } = useQuery<QueryResponse>(POP_DENSITY, {
        variables: { year: year },
    });

    const getGraph = (loading: boolean, data: QueryResponse | undefined) => {
        if (loading) return <Spinner animation="grow" />
        if (data === undefined) return
        return <CommonGraphComponent input={[
            data.popDensity.perSqKm.map((g) => { return { x: g.country, y: g.value, label: `Population density in  ${year}` } }),
        ]}
            yaxisLabel={(x) => (`${x}st`)} />
    }

    return (
        <>
            <h4>Population density in {year}</h4>
            {getGraph(loading, data)}
        </>
    );
}

export default PopDensityComponent;