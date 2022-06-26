# ISO3166-Lookup

[![npm](https://img.shields.io/npm/v/iso3166-lookup?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/iso3166-lookup)
[![npm bundle size](https://img.shields.io/bundlephobia/min/iso3166-lookup?color=green&style=for-the-badge)](https://www.npmjs.com/package/iso3166-lookup)
[![npm](https://img.shields.io/npm/dw/iso3166-lookup?style=for-the-badge)](https://www.npmjs.com/package/iso3166-lookup)

ISO 3166-1:2020 country and codes lookup. The supported country code types are alpha-2, alpha-3 and num-3.

## Installation

Install using npm
```bash
npm install iso3166-lookup
```

## Usage
**Using ISO 3166-1:2020 Codes lookup package into your code** ```(import / require)```
```javascript
import iso3166Lookup from "iso3166-lookup";
```
OR
```javascript
const iso3166Lookup = require('iso3166-lookup');
```

### Get the list

**Get all countries**
```javascript
console.log(iso3166Lookup.getAllCountries());
/** Returns:
  [
    {
      alpha2: "AD",
      alpha3: "AND",
      country: "Andorra",
      num3: "020",
    },
    {
      alpha2: "AE",
      alpha3: "ARE",
      country: "United Arab Emirates",
      num3: "784",
    },...
  ]
*/
```

**Get all Country Names**
```javascript
console.log(iso3166Lookup.getAllCountryNames());
/** Returns:
  [
    "Andorra", "United Arab Emirates",...
  ]
*/
```

**Get all Alpha-2 Codes**
```javascript
console.log(iso3166Lookup.getAllAlpha2());
/** Returns:
  [
    "AD", "AE",...
  ]
*/
```

**Get all Alpha-3 Codes**
```javascript
console.log(iso3166Lookup.getAllAlpha3());
/** Returns:
  [
    "AND", "ARE",...
  ]
*/
```

### Lookup country details

**Find country details by country name**
```javascript
console.log(iso3166Lookup.findCountry('India'));
/** Returns:
  {
    country: 'India',
    alpha2: 'IN',
    alpha3: 'IND',
    numeric: '356'
  }
*/
```

**Find country details by ISO 3166-1 Alpha-2**
```javascript
console.log(iso3166Lookup.findAlpha2('in'));
/** Returns:
  {
    country: 'India',
    alpha2: 'IN',
    alpha3: 'IND',
    numeric: '356'
  }
*/
```

**Find country details by ISO 3166-1 Alpha-3**
```javascript
console.log(iso3166Lookup.findAlpha3('ind'));
/** Returns:
  {
    country: 'India',
    alpha2: 'IN',
    alpha3: 'IND',
    numeric: '356'
  }
*/
```

**Find country details by ISO 3166-1 Num-3 (Numeric)**
```javascript
console.log(iso3166Lookup.findNum3(356));
/** Returns:
  {
    country: 'India',
    alpha2: 'IN',
    alpha3: 'IND',
    numeric: '356'
  }
*/
```

### Additional features

**Specify Return/Output types for find functions**

You can optionally pass second param to find functions (viz. - findCountry, findAlpha2, findAlpha3, findNum3) to specify desired output format. By default functions will return country object if the parameter is not supplied. You can specify any value from the following: "obj", "name", "alpha2", "alpha3", "num3".

For example you can specify "name" to recieve output Country name as string or can specify "obj" to get Country object in return.
```javascript
console.log(iso3166Lookup.findCountry("india"));          // will return country object for India
console.log(iso3166Lookup.findCountry("india", "obj"));   // will return country object for India
console.log(iso3166Lookup.findAlpha2("in", "name"));      // will return "India"
console.log(iso3166Lookup.findAlpha3("ind", "alpha2"));   // will return "IN"
console.log(iso3166Lookup.findNum3(356, "alpha3"));       // will return "IND"
console.log(iso3166Lookup.findCountry("india", "num3"));  // will return "356"
```


## References:

You can check following links for more information:
- [ISO 3166 Country Codes](https://www.iso.org/iso-3166-country-codes.html)
- [ISO 3166-1:2020](https://www.iso.org/standard/72482.html) Part 1: Country code
- [ISO:3166-1](https://en.wikipedia.org/wiki/ISO_3166-1)
- [ISO:639](https://en.wikipedia.org/wiki/ISO_639)

## License
[![GitHub license](https://img.shields.io/github/license/omkartapale/iso3166-lookup?style=for-the-badge)](https://github.com/omkartapale/iso3166-lookup/blob/main/LICENSE)

Copyright (c) 2022 Omkar Tapale
