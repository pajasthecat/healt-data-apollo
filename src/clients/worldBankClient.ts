import axios from "axios";
import { ResponseMetadata, IndicatorData } from "./types";

export const getTotalExpAsPartOfGDP = (year: number) => {
  return get("SH.XPD.CHEX.GD.ZS", year);
};

export const getHospitalBeds1000 = (year: number) => {
  return get("SH.MED.BEDS.ZS", year);
};

export const getPopDensityPerSqKm = (year: number) => {
  return get("EN.POP.DNST", year);
};

export const getGovernmentExpOfTotalExp = (year: number) => {
  return get("SH.XPD.GHED.GE.ZS", year);
};

export const getPrivateExpOfTotalExp = (year: number) => {
  return get("SH.XPD.PVTD.CH.ZS", year);
};

export const getOutOfPocketExpOfTotalExp = (year: number) => {
  return get("SH.XPD.OOPC.CH.ZS", year);
};

export const getTotalExpPerCapitaUsd = (year: number) => {
  return get("SH.XPD.CHEX.PC.CD", year);
};

export const getGovernmentExpPerCapitaUsd = (year: number) => {
  return get("SH.XPD.GHED.PC.CD", year);
};

export const getOutOfPocketExpPerCapitaUsd = (year: number) => {
  return get("SH.XPD.OOPC.PC.CD", year);
};

export const getPrivateExpPerCapitaUsd = (year: number) => {
  return get("SH.XPD.PVTD.PC.CD", year);
};

const get = (indicator: string, year: number) => {
  return axios
    .get<[ResponseMetadata, IndicatorData[]]>(
      `http://api.worldbank.org/v2/country/dnk;swe;nor;fin;isl/indicator/${indicator}?date=${year}&format=json`
    )
    .then((res) => {
      const values = res.data[1];
      const mappedValues = values
        .filter((val) => val.countryiso3code !== undefined)
        .filter((val) => val.value !== undefined)
        .map((val) => {
          return { country: val.countryiso3code, value: val.value };
        });
      return mappedValues;
    });
};
