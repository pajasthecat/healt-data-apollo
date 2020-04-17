import React from 'react'
import { QueryResponse } from '../querytypes';
import { useQuery } from '@apollo/react-hooks';
import CommonGraphComponent from '../graph/commonGraphComponent';
import { HOSPITAL_BEDS } from '../queries';
import { Spinner } from 'react-bootstrap';

interface Props {
    year: number;
}

const HospitalBedComponent: React.FunctionComponent<Props> = ({ year }) => {

    const { loading, data } = useQuery<QueryResponse>(HOSPITAL_BEDS, {
        variables: { year: year },
    });

    const getGraph = (loading: boolean, data: QueryResponse | undefined) => {
        if (loading) return <Spinner animation="grow" />
        if (data === undefined) return
        return <CommonGraphComponent input={[
            data.healthExpenditures.hospitalBeds.map((g) => { return { x: g.country, y: g.value, label: `Amount of hospital beds in the year ${year}` } }),
        ]}
            yaxisLabel={(x) => (`${x}st`)} />
    }

    return (
        <>
            <h4>Amount of hospital beds in the year {year}</h4>
            {getGraph(loading, data)}
        </>
    );
}

export default HospitalBedComponent;