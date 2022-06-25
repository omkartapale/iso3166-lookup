import countries, { Country } from "./countries";

enum OutputType {
  "CountryObject" = "obj",
  "CountryName" = "name",
  "Alpha2" = "alpha2",
  "Alpha3" = "alpha3",
  "Num3" = "num3",
}

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
 * Find country details by country name
 *
 * @param {string} name
 * @param {OutputType} optype
 * @returns {Country | undefined}
 */
export const findCountry = (
  name: string,
  optype: OutputType | string = OutputType.CountryObject
): Country | string | undefined | never => {
  let c = countries.find(
    (country) => country.country.toUpperCase() === name.toUpperCase()
  );
  switch (optype) {
    case OutputType.CountryObject:
      return c;
    case OutputType.Alpha2:
      return c?.alpha2;
    case OutputType.Alpha3:
      return c?.alpha3;
    case OutputType.Num3:
      return c?.num3;
    default:
      throw new Error(`Non-existent output type supplied: ${optype}`);
  }
};

/**
 * Find country details by ISO 3166-1 Alpha-2 Code
 *
 * @param {string} alpha2
 * @param {OutputType} optype
 * @returns {Country | undefined}
 */
export const findAlpha2 = (
  alpha2: string,
  optype: OutputType | string = OutputType.CountryObject
): Country | string | undefined | never => {
  let c = countries.find((country) => country.alpha2 === alpha2.toUpperCase());
  switch (optype) {
    case OutputType.CountryObject:
      return c;
    case OutputType.CountryName:
      return c?.country;
    case OutputType.Alpha3:
      return c?.alpha3;
    case OutputType.Num3:
      return c?.num3;
    default:
      throw new Error(`Non-existent output type supplied: ${optype}`);
  }
};

/**
 * Find country details by ISO 3166-1 Alpha-3 Code
 *
 * @param {string} alpha3
 * @param {OutputType} optype
 * @returns {Country | undefined}
 */
export const findAlpha3 = (
  alpha3: string,
  optype: OutputType | string = OutputType.CountryObject
): Country | string | undefined | never => {
  let c = countries.find((country) => country.alpha3 === alpha3.toUpperCase());
  switch (optype) {
    case OutputType.CountryObject:
      return c;
    case OutputType.CountryName:
      return c?.country;
    case OutputType.Alpha2:
      return c?.alpha2;
    case OutputType.Num3:
      return c?.num3;
    default:
      throw new Error(`Non-existent output type supplied: ${optype}`);
  }
};

/**
 * Find country details by ISO 3166-1 Numeric Num-3 Code
 *
 * @param {string | number} num3
 * @param {OutputType} optype
 * @returns {Country | undefined}
 */
export const findNum3 = (
  num3: string | number,
  optype: OutputType | string = OutputType.CountryObject
): Country | string | undefined | never => {
  let c = countries.find((country) => country.num3 === String(num3));
  switch (optype) {
    case OutputType.CountryObject:
      return c;
    case OutputType.CountryName:
      return c?.country;
    case OutputType.Alpha2:
      return c?.alpha2;
    case OutputType.Alpha3:
      return c?.alpha3;
    default:
      throw new Error(`Non-existent output type supplied: ${optype}`);
  }
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
