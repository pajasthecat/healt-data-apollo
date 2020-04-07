import React from 'react'
import Select from 'react-select'

interface ChooseInput {
setCountry: (country: string) => void,
setYear: (year: number) => void,
}

const countryOptions = [{value: "SE", label: "SE"}, {value: "IT", label: "IT"}]
const yearOptions = [{value: 2016, label: "2016"}]

const ChooseInputComponent : React.FunctionComponent<ChooseInput> = ({setCountry, setYear}) => {

return (<div>
    <Select defaultInputValue={'IT'} options={countryOptions} onChange = {(val) => {
        const {value, _} =  val as any;
        setCountry(value)}}/>
    <Select options={yearOptions}/>
</div>);
}

export default ChooseInputComponent;