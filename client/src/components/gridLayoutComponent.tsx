import React, { useState } from "react";
import PerCapitaUsdComponent from "./healtExpenditures/perCapitaUsdComponent";
import PercentOfTotalExpenditureComponent from "./healtExpenditures/percentOfTotalExpenditureComponent";
import { Container, Row, Col } from 'react-bootstrap';
import HospitalBedComponent from "./healtExpenditures/hospitalBedsComponent";
import PopDensityComponent from "./popDensityComponent";
import ChooseYearComponent from "./chooseYearComponent";

export const gridBoxStyle = {
    backgroundColor: 'white',
    padding: 20,
    margin: '10px 10px 10px 10px',
    border: '1px solid white',
    boxShadow: " 0 9px 10px 0 rgba(0, 0, 0, 0.2)"
}

const GridLayoutComponent: React.FunctionComponent = () => {
    const [year, setYear] = useState(2000)
    return (
        <Container fluid>
            <Row>
                <Col>
                </Col>
                <Col>
                </Col>
                <h1 style={{ textAlign: 'center', padding: '20px', fontSize: '50px' }}>
                    Covid19 related data
                </h1>
                <Col>
                </Col>
                <Col xs={{ order: 12 }} style={{ textAlign: 'center', padding: '20px' }}>
                    <ChooseYearComponent
                        year={year}
                        setYear={setYear} />
                </Col>
            </Row>
            <Row>
                <Col xs={12} xl style={gridBoxStyle}>
                    <PerCapitaUsdComponent year={year} />
                </Col>
                <Col xs={12} xl style={gridBoxStyle}>
                    <PercentOfTotalExpenditureComponent year={year} />
                </Col>
                <Col xs={12} xl style={gridBoxStyle}>
                    <HospitalBedComponent year={year} />
                </Col>
                <Col xs={12} xl style={gridBoxStyle}>
                    <PopDensityComponent year={year} />
                </Col>
            </Row>
        </Container>
    )

}

export default GridLayoutComponent;