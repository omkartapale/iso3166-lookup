# iso3166-lookup

ISO 3166-1:2020 country and codes lookup. The supported country code types are alpha-2, alpha-3 and num-3.

## Installation

Install using npm
```bash
npm install iso3166-lookup
```

## Usage
**Using ISO 3166-1:2020 Codes lookup package into your code** ```(import / require)```
```javascript
import countries from "iso3166-lookup";
```
OR
```javascript
const countries = require('iso3166-lookup');
```

**Get all countries**
```javascript
console.log(countries.getAllCountries());
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

**Find country by country name**
```javascript
console.log(countries.findCountry('India'));
/** Returns:
  {
    country: 'India',
    alpha2: 'IN',
    alpha3: 'IND',
    numeric: '356'
  }
*/
```

**Find country by ISO 3166-1 Alpha-2**
```javascript
console.log(countries.findAlpha2('in'));
/** Returns:
  {
    country: 'India',
    alpha2: 'IN',
    alpha3: 'IND',
    numeric: '356'
  }
*/
```

**Find country by ISO 3166-1 Alpha-3**
```javascript
console.log(countries.findAlpha3('ind'));
/** Returns:
  {
    country: 'India',
    alpha2: 'IN',
    alpha3: 'IND',
    numeric: '356'
  }
*/
```

**Find country by ISO 3166-1 Num-3 (Numeric)**
```javascript
console.log(countries.findNum3(356));
/** Returns:
  {
    country: 'India',
    alpha2: 'IN',
    alpha3: 'IND',
    numeric: '356'
  }
*/
```

## References:

You can check following links for more information:
- [ISO 3166 Country Codes](https://www.iso.org/iso-3166-country-codes.html)
- [ISO 3166-1:2020](https://www.iso.org/standard/72482.html) Part 1: Country code
- [ISO:3166-1](https://en.wikipedia.org/wiki/ISO_3166-1)
- [ISO:639](https://en.wikipedia.org/wiki/ISO_639)

### License
[MIT License](https://github.com/omkartapale/iso3166-codes/blob/main/LICENSE)
Copyright (c) 2022 Omkar Tapale