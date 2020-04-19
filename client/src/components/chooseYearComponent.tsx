import React from "react";
import { Dropdown } from "react-bootstrap";

interface Props {
    year: number,
    setYear: (year: number) => void
}

const ChooseYearComponent: React.FunctionComponent<Props> = ({ year, setYear }) => {

    const getYears = (start: number, end: number) =>
        Array.from(Array(end - start + 1)).map((_, idx: number) => start + idx);

    const getDropDownItems = (start: number, end: number) =>
        getYears(start, end)
            .map((year) => { return <Dropdown.Item eventKey={year.toString()} onSelect={(eventKey: string, _: Object) => setYear(parseInt(eventKey))}>{year}</Dropdown.Item> })

    return (
        <Dropdown style={{ color: 'black', fontWeight: 'normal', backgroundColor: 'white', border: 'none', outline: 'none', outlineStyle: 'none' }}>
            <Dropdown.Toggle
                variant="secondary" id="dropdown-basic" style={{ color: 'black', fontWeight: 'normal', backgroundColor: 'white', border: 'none', outline: 'none', outlineStyle: 'none' }}>
                Year {year}
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ color: 'black', fontWeight: 'normal', backgroundColor: 'white', border: 'none', outline: 'none', outlineStyle: 'none' }}>
                {getDropDownItems(2000, 2016)}
            </Dropdown.Menu>
        </Dropdown>)
}

export default ChooseYearComponent;