import { expect } from "chai";
import { describe, it } from "mocha";
import iso3166Lookup from "../dist/";
import countries from "../dist/countries";

describe("Tests for ISO-3166-1 lookup features", function () {
  describe("Get all from list", function () {
    it("returns an array of all country objects", function () {
      expect(iso3166Lookup.getAllCountries()).to.be.equal(countries);
    });
    it("returns an array of all country names", function () {
      expect(iso3166Lookup.getAllCountryNames()).to.be.deep.equal(
        countries.map((c) => c.country)
      );
    });
    it("returns an array of Alpha2 codes for all countries", function () {
      expect(iso3166Lookup.getAllAlpha2()).to.be.deep.equal(
        countries.map((c) => c.alpha2)
      );
    });
    it("returns an array of Alpha3 codes for all countries", function () {
      expect(iso3166Lookup.getAllAlpha3()).to.be.deep.equal(
        countries.map((c) => c.alpha3)
      );
    });
  });

  describe("Not existing countries", function () {
    it("returns undefined if country not found with country name", function () {
      const country = iso3166Lookup.findCountry("Unknown");

      expect(country).to.be.equal(undefined);
    });

    it("returns undefined if country not found with alpha-2", function () {
      const country = iso3166Lookup.findAlpha2("xx");

      expect(country).to.be.equal(undefined);
    });

    it("returns undefined if country not found with alpha-3", function () {
      const country = iso3166Lookup.findAlpha3("xxx");

      expect(country).to.be.equal(undefined);
    });

    it("returns undefined if country not found with num-3", function () {
      const country = iso3166Lookup.findNum3("999");

      expect(country).to.be.equal(undefined);
    });
  });

  describe("Supplying country name as param", function () {
    it("returns a country by country name with uppercase letters", function () {
      const country = iso3166Lookup.findCountry("INDIA");

      expect(country).to.have.deep.property("country", "India");
      expect(country).to.have.deep.property("alpha2", "IN");
      expect(country).to.have.deep.property("alpha3", "IND");
      expect(country).to.have.deep.property("num3", "356");
    });

    it("returns a country by country name with lowercase letters", function () {
      const country = iso3166Lookup.findCountry("norway");

      expect(country).to.have.deep.property("country", "Norway");
      expect(country).to.have.deep.property("alpha2", "NO");
      expect(country).to.have.deep.property("alpha3", "NOR");
      expect(country).to.have.deep.property("num3", "578");
    });
  });

  describe("Supplying alpha-2 as param", function () {
    it("returns a country by alpha-2 with lowercase letters", function () {
      const country = iso3166Lookup.findAlpha2("ax");

      expect(country).to.have.deep.property("country", "Åland Islands");
      expect(country).to.have.deep.property("alpha2", "AX");
      expect(country).to.have.deep.property("alpha3", "ALA");
      expect(country).to.have.deep.property("num3", "248");
    });

    it("returns a country by alpha-2 with uppercase letters", function () {
      const country = iso3166Lookup.findAlpha2("BA");

      expect(country).to.have.deep.property(
        "country",
        "Bosnia and Herzegovina"
      );
      expect(country).to.have.deep.property("alpha2", "BA");
      expect(country).to.have.deep.property("alpha3", "BIH");
      expect(country).to.have.deep.property("num3", "070");
    });
  });

  describe("Supplying alpha-3 as param", function () {
    it("returns a country by alpha-3 with lowercase letters", function () {
      const country = iso3166Lookup.findAlpha3("asm");

      expect(country).to.have.deep.property("country", "American Samoa");
      expect(country).to.have.deep.property("alpha2", "AS");
      expect(country).to.have.deep.property("alpha3", "ASM");
      expect(country).to.have.deep.property("num3", "016");
    });

    it("returns a country by alpha-3 with uppercase letters", function () {
      const country = iso3166Lookup.findAlpha3("ATG");

      expect(country).to.have.deep.property("country", "Antigua and Barbuda");
      expect(country).to.have.deep.property("alpha2", "AG");
      expect(country).to.have.deep.property("alpha3", "ATG");
      expect(country).to.have.deep.property("num3", "028");
    });
  });

  describe("Supplying num-3 as param", function () {
    it("returns a country by num-3 (integer)", function () {
      const country = iso3166Lookup.findNum3(616);

      expect(country).to.have.deep.property("country", "Poland");
      expect(country).to.have.deep.property("alpha2", "PL");
      expect(country).to.have.deep.property("alpha3", "POL");
      expect(country).to.have.deep.property("num3", "616");
    });

    it("returns a country by num-3 (string)", function () {
      const country = iso3166Lookup.findNum3("036");

      expect(country).to.have.deep.property("country", "Australia");
      expect(country).to.have.deep.property("alpha2", "AU");
      expect(country).to.have.deep.property("alpha3", "AUS");
      expect(country).to.have.deep.property("num3", "036");
    });
  });
});
