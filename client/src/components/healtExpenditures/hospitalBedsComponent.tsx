import React from 'react'
import { QueryResponse } from '../querytypes';
import { useQuery } from '@apollo/react-hooks';
import { HOSPITAL_BEDS } from '../queries';
import CommonComponent from '../commonComponent';

interface Props {
    year: number;
}

const HospitalBedComponent: React.FunctionComponent<Props> = ({ year }) => {

    const { loading, data } = useQuery<QueryResponse>(HOSPITAL_BEDS, {
        variables: { year: year },
    });

    if (data !== undefined) return (
        <CommonComponent
            yaxisLabel={(x) => (`${x}st`)}
            header={`Amount of hospital beds in ${year}`}
            loading={loading}
            graphInput={[
                data!.healthExpenditures.hospitalBeds
                    .map((g) => { return { x: g.country, y: g.value, label: `Amount of hospital beds in the year ${year}` } })]}
        />
    );
    return <></>
}

export default HospitalBedComponent;