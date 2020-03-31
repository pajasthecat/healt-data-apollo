export interface IndicatorData {
    indicator:       Country;
    country:         Country;
    countryiso3code: string;
    date:            string;
    value:           number;
    unit:            string;
    obs_status:      string;
    decimal:         number;
}

export interface Country {
    id:    string;
    value: string;
}

export interface ResponseMetadata {
    page:        number;
    pages:       number;
    per_page:    number;
    total:       number;
    sourceid:    string;
    lastupdated: Date;
}