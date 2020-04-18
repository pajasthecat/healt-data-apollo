import React from "react";
import { QueryResponse } from "./querytypes";
import { POP_DENSITY } from "./queries";
import { useQuery } from "@apollo/react-hooks";
import CommonComponent from "./commonComponent";

interface Props {
    year: number
}

const PopDensityComponent: React.FunctionComponent<Props> = ({ year }) => {
    const { loading, data } = useQuery<QueryResponse>(POP_DENSITY, {
        variables: { year: year },
    });

    if (data !== undefined) return (
        <CommonComponent
            yaxisLabel={(x) => (`${x}`)}
            header={`Population density in ${year}`}
            loading={loading}
            graphInput={[data.popDensity.perSqKm
                .map((g) => { return { x: g.country, y: g.value, label: `Population density per sq/km in  ${year}` } })]}
        />
    );
    return <></>
}

export default PopDensityComponent;