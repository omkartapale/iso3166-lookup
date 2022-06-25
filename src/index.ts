import countries, { Country } from "./countries";

/**
 * Get all countries
 *
 * @returns {Array<Country>}
 */
export const getAllCountries = (): Country[] => countries;

/**
 * Get all Country Names
 *
 * @returns {Array<String>}
 */
export const getAllCountryNames = (): Array<String> =>
  countries.map((c) => c.country);

/**
 * Get all Alpha2 Codes
 *
 * @returns {Array<String>}
 */
export const getAllAlpha2 = (): Array<String> => countries.map((c) => c.alpha2);

/**
 * Get all Alpha3 Codes
 *
 * @returns {Array<String>}
 */
export const getAllAlpha3 = (): Array<String> => countries.map((c) => c.alpha3);

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
  getAllCountryNames,
  getAllAlpha2,
  getAllAlpha3,
  findCountry,
  findAlpha2,
  findAlpha3,
  findNum3,
};
