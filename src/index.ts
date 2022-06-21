import countries, { Country } from "./countries";

/**
 * Get all countries
 *
 * @returns {Array<Country>}
 */
export const getAllCountries = (): Country[] => countries;

/**
 * Find country by country name
 *
 * @param {string} name
 * @returns {Country | undefined}
 */
export const findCountry = (name: string): Country | undefined => {
  return countries.find(
    (country) => country.country.toUpperCase() === name.toUpperCase()
  );
};

/**
 * Find country by ISO 3166-1 Alpha-2 Code
 *
 * @param {string} alpha2
 * @returns {Country | undefined}
 */
export const findAlpha2 = (alpha2: string): Country | undefined => {
  return countries.find((country) => country.alpha2 === alpha2.toUpperCase());
};

/**
 * Find country by ISO 3166-1 Alpha-3 Code
 *
 * @param {string} alpha3
 * @returns {Country | undefined}
 */
export const findAlpha3 = (alpha3: string): Country | undefined => {
  return countries.find((country) => country.alpha3 === alpha3.toUpperCase());
};

/**
 * Find country by ISO 3166-1 Numeric Code
 *
 * @param {string | number} num3
 * @returns {Country | undefined}
 */
export const findNum3 = (num3: string | number): Country | undefined => {
  return countries.find((country) => country.num3 === String(num3));
};

export default {
  getAllCountries,
  findCountry,
  findAlpha2,
  findAlpha3,
  findNum3,
};
