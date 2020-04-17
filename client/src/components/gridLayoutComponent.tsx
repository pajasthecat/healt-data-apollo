import React from "react";
import PerCapitaUsdComponent from "./healtExpenditures/perCapitaUsdComponent";
import PercentOfTotalExpenditureComponent from "./healtExpenditures/percentOfTotalExpenditureComponent";
import { Container, Row, Col } from 'react-bootstrap';
import HospitalBedComponent from "./healtExpenditures/hospitalBedsComponent";
import PopDensityComponent from "./popDensityComponent";

export const gridBoxStyle = {
    backgroundColor: 'white',
    padding: 20,
    margin: '10px 10px 10px 10px',
    border: '1px solid white',
    boxShadow: " 0 9px 10px 0 rgba(0, 0, 0, 0.2)"
}

interface Props {
    year: number
}

const GridLayoutComponent: React.FunctionComponent<Props> = ({ year }) => {
    return (
        <Container>
            <Row>
                <Col style={gridBoxStyle}>
                    <PerCapitaUsdComponent year={year} />
                </Col>
                <Col style={gridBoxStyle}>
                    <PercentOfTotalExpenditureComponent year={year} />
                </Col>
            </Row>
            <Row>
                <Col style={gridBoxStyle}>
                    <HospitalBedComponent year={2010} />
                </Col>
                <Col style={gridBoxStyle}>
                    <PopDensityComponent year={year} />
                </Col>
            </Row>
        </Container>
    )

}

export default GridLayoutComponent;