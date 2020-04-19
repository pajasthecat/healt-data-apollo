import React from "react";
import CommonGraphComponent, { GraphData } from "./graph/commonGraphComponent";
import AnimatedLogo from "../animations/graphLogo";

interface Props {
    graphInput: GraphData[][] | undefined,
    loading: boolean,
    yaxisLabel: (x: any) => string,
    header: string
}

const CommonComponent: React.FunctionComponent<Props> = ({ graphInput, yaxisLabel, header, loading }) => {

    const getGraph = (loading: boolean, data: GraphData[][] | undefined) => {
        if (loading) return <AnimatedLogo />

        if (data === undefined) return
        return <CommonGraphComponent input={data} yaxisLabel={yaxisLabel} />
    }

    return (
        <>
            <h4>{header}</h4>
            {graphInput !== undefined ? getGraph(loading, graphInput) : <></>}
        </>
    );
}

export default CommonComponent;