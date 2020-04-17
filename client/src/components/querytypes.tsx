export interface Content {
  country: string,
  value: number
}

export interface PerCapitaUsd {
  totalExpPerCapitaUsd: Content[],
  governmentExpPerCapitaUsd: Content[],
  outOfPocketExpPerCapitaUsd: Content[],
  privateExpPerCapitaUsd: Content[],
}

export interface PercentOfTotalExpenditure {
  governmentExpOfTotalExp: Content[],
  privateExpOfTotalExp: Content[],
  outOfPocketExpOfTotalExp: Content[]
}

export interface PopDensity {
  perSqKm: Content[]
}

export interface HealthExpendituresResponse {
  perCapitaUsd: PerCapitaUsd
  percentOfTotalExpenditure: PercentOfTotalExpenditure
  hospitalBeds: Content[]
}

export interface QueryResponse {
  healthExpenditures: HealthExpendituresResponse
  popDensity: PopDensity
}