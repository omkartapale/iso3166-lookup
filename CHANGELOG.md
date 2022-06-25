# Changelog

## [1.1.0] - 2022-06-26
### New features

- Added more functions to get list of specified details from country list
  - `getAllCountryNames()`
  - `getAllAlpha2()`
  - `getAllAlpha3()`
- Added `OutputType` enum to specify return type

### Changed features

- Specify Return/Output types for find functions

  You can optionally pass second param to find functions (viz. - findCountry, findAlpha2, findAlpha3, findNum3) to specify desired output format. By default functions will return country object if the parameter is not supplied. You can specify any value from the following: "obj", "name", "alpha2", "alpha3", "num3".

## [1.0.0] - 2022-06-22

We're super excited to announce very first version of ISO 3166-1:2020 Country Codes lookup package.
This is the first release by [@omkartapale](https://github.com/omkartapale). Buy him a cake if you run into his profile, thanks for getting this release out!

### Intial Release
- Completed first version with basic features
  - `getAllCountries()`
  - `findCountry()`
  - `findAlpha2()`
  - `findAlpha3()`
  - `findNum3()`
