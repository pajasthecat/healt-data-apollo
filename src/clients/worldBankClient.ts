import axios from 'axios';
import { ResponseMetadata, IndicatorData } from './types';

export const getTotalExpAsPartOfGDP = (countryCode: string, year: number) => {
    return get('SH.XPD.CHEX.GD.ZS', countryCode, year);
}

export const getGovernmentExpOfTotalExp = (countryCode: string, year: number) => {
    return get('SH.XPD.GHED.GE.ZS', countryCode, year);
}

export const getPrivateExpOfTotalExp = (countryCode: string, year: number) => {
    return get('SH.XPD.PVTD.CH.ZS', countryCode, year);
}

export const getOutOfPocketExpOfTotalExp = (countryCode: string, year: number) => {
    return get('SH.XPD.OOPC.CH.ZS', countryCode, year);
}

export const getTotalExpPerCapitaUsd = (countryCode: string, year: number) => {
    return get('SH.XPD.CHEX.PC.CD', countryCode, year);
}

export const getGovernmentExpPerCapitaUsd = (countryCode: string, year: number) => {
    return get('SH.XPD.GHED.PC.CD', countryCode, year);
}

export const getOutOfPocketExpPerCapitaUsd = (countryCode: string, year: number) => {
    return get('SH.XPD.OOPC.PC.CD', countryCode, year);
}

export const getPrivateExpPerCapitaUsd = (countryCode: string, year: number) => {
    return get('SH.XPD.PVTD.PC.CD', countryCode, year);
}

const get = (indicator: string, country:string, year: number) => {
    return axios
    .get<[ResponseMetadata, IndicatorData[]]>(`http://api.worldbank.org/v2/country/${country}/indicator/${indicator}?date=${year}&format=json`)
    .then((res) =>{
        return res.data[1][0].value;
    } );
}