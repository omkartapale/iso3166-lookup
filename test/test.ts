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

  describe("Not existing countries or invalid output type param", function () {
    it("throws error if invalid optype supplied to findCountry()", function () {
      expect(() => iso3166Lookup.findCountry("india", "name1")).to.throw(
        Error,
        "Non-existent output type supplied: name1"
      );
    });

    it("returns undefined if country not found with country name", function () {
      expect(iso3166Lookup.findCountry("Unknown")).to.be.equal(undefined);
    });

    it("throws error if invalid optype supplied to findAlpha2()", function () {
      expect(() => iso3166Lookup.findAlpha2("ax", "name1")).to.throw(
        Error,
        "Non-existent output type supplied: name1"
      );
    });

    it("returns undefined if country not found with alpha-2 and optype (obj)", function () {
      expect(iso3166Lookup.findAlpha2("xx", "obj")).to.be.equal(undefined);
    });

    it("returns undefined if country not found with alpha-2 and optype (name)", function () {
      expect(iso3166Lookup.findAlpha2("xx", "name")).to.be.equal(undefined);
    });

    it("returns undefined if country not found with alpha-2 and optype (alpha3)", function () {
      expect(iso3166Lookup.findAlpha2("xx", "alpha3")).to.be.equal(undefined);
    });

    it("returns undefined if country not found with alpha-2 and optype (num3)", function () {
      expect(iso3166Lookup.findAlpha2("xx", "num3")).to.be.equal(undefined);
    });

    it("returns undefined if country not found with alpha-2", function () {
      expect(iso3166Lookup.findAlpha2("xx")).to.be.equal(undefined);
    });

    it("throws error if invalid optype supplied to findAlpha3()", function () {
      expect(() => iso3166Lookup.findAlpha3("ind", "name1")).to.throw(
        Error,
        "Non-existent output type supplied: name1"
      );
    });

    it("returns undefined if country not found with alpha-3", function () {
      expect(iso3166Lookup.findAlpha3("xxx")).to.be.equal(undefined);
    });

    it("throws error if invalid optype supplied to findNum3()", function () {
      expect(() => iso3166Lookup.findNum3("999", "name1")).to.throw(
        Error,
        "Non-existent output type supplied: name1"
      );
    });

    it("returns undefined if country not found with num-3", function () {
      expect(iso3166Lookup.findNum3("999")).to.be.equal(undefined);
    });
  });

  describe("Supplying country name as param", function () {
    it("returns a country object by country name with uppercase letters", function () {
      const country = iso3166Lookup.findCountry("INDIA");

      expect(country).to.have.deep.property("country", "India");
      expect(country).to.have.deep.property("alpha2", "IN");
      expect(country).to.have.deep.property("alpha3", "IND");
      expect(country).to.have.deep.property("num3", "356");
    });

    it("returns a country object by country name with lowercase letters", function () {
      const country = iso3166Lookup.findCountry("norway");

      expect(country).to.have.deep.property("country", "Norway");
      expect(country).to.have.deep.property("alpha2", "NO");
      expect(country).to.have.deep.property("alpha3", "NOR");
      expect(country).to.have.deep.property("num3", "578");
    });

    it("returns a country object by country name and optype (obj)", function () {
      const country = iso3166Lookup.findCountry("norway", "obj");

      expect(country).to.have.deep.property("country", "Norway");
      expect(country).to.have.deep.property("alpha2", "NO");
      expect(country).to.have.deep.property("alpha3", "NOR");
      expect(country).to.have.deep.property("num3", "578");
    });

    it("returns an alpha2 code by country name and optype (alpha2)", function () {
      expect(iso3166Lookup.findCountry("norway", "alpha2")).to.be.equal("NO");
    });

    it("returns an alpha3 code by country name and optype (alpha3)", function () {
      expect(iso3166Lookup.findCountry("norway", "alpha3")).to.be.equal("NOR");
    });

    it("returns a num3 code by country name and optype (num3)", function () {
      expect(iso3166Lookup.findCountry("norway", "num3")).to.be.equal("578");
    });
  });

  describe("Supplying alpha-2 as param", function () {
    it("returns a country object by alpha-2 with lowercase letters", function () {
      const country = iso3166Lookup.findAlpha2("ax");

      expect(country).to.have.deep.property("country", "Åland Islands");
      expect(country).to.have.deep.property("alpha2", "AX");
      expect(country).to.have.deep.property("alpha3", "ALA");
      expect(country).to.have.deep.property("num3", "248");
    });

    it("returns a country object by alpha-2 with uppercase letters", function () {
      const country = iso3166Lookup.findAlpha2("BA");

      expect(country).to.have.deep.property(
        "country",
        "Bosnia and Herzegovina"
      );
      expect(country).to.have.deep.property("alpha2", "BA");
      expect(country).to.have.deep.property("alpha3", "BIH");
      expect(country).to.have.deep.property("num3", "070");
    });

    it("returns a country object by alpha-2 and optype (obj)", function () {
      const country = iso3166Lookup.findAlpha2("BA", "obj");

      expect(country).to.have.deep.property(
        "country",
        "Bosnia and Herzegovina"
      );
      expect(country).to.have.deep.property("alpha2", "BA");
      expect(country).to.have.deep.property("alpha3", "BIH");
      expect(country).to.have.deep.property("num3", "070");
    });

    it("returns a country name by alpha-2 and optype (name)", function () {
      expect(iso3166Lookup.findAlpha2("ax", "name")).to.be.equal(
        "Åland Islands"
      );
    });

    it("returns an alpha3 code by alpha-2 and optype (alpha3)", function () {
      expect(iso3166Lookup.findAlpha2("ax", "alpha3")).to.be.equal("ALA");
    });

    it("returns a num3 code by alpha-2 and optype (num3)", function () {
      expect(iso3166Lookup.findAlpha2("ax", "num3")).to.be.equal("248");
    });
  });

  describe("Supplying alpha-3 as param", function () {
    it("returns a country object by alpha-3 with lowercase letters", function () {
      const country = iso3166Lookup.findAlpha3("asm");

      expect(country).to.have.deep.property("country", "American Samoa");
      expect(country).to.have.deep.property("alpha2", "AS");
      expect(country).to.have.deep.property("alpha3", "ASM");
      expect(country).to.have.deep.property("num3", "016");
    });

    it("returns a country object by alpha-3 with uppercase letters", function () {
      const country = iso3166Lookup.findAlpha3("ATG");

      expect(country).to.have.deep.property("country", "Antigua and Barbuda");
      expect(country).to.have.deep.property("alpha2", "AG");
      expect(country).to.have.deep.property("alpha3", "ATG");
      expect(country).to.have.deep.property("num3", "028");
    });

    it("returns a country object by alpha-3 and optype (obj)", function () {
      const country = iso3166Lookup.findAlpha3("nor", "obj");

      expect(country).to.have.deep.property("country", "Norway");
      expect(country).to.have.deep.property("alpha2", "NO");
      expect(country).to.have.deep.property("alpha3", "NOR");
      expect(country).to.have.deep.property("num3", "578");
    });

    it("returns country name by alpha-3 and optype (name)", function () {
      expect(iso3166Lookup.findAlpha3("nor", "name")).to.be.equal("Norway");
    });

    it("returns an alpha2 code by alpha-3 and optype (alpha2)", function () {
      expect(iso3166Lookup.findAlpha3("nor", "alpha2")).to.be.equal("NO");
    });

    it("returns a num3 code by alpha-3 and optype (num3)", function () {
      expect(iso3166Lookup.findAlpha3("nor", "num3")).to.be.equal("578");
    });
  });

  describe("Supplying num-3 as param", function () {
    it("returns a country object by num-3 (integer)", function () {
      const country = iso3166Lookup.findNum3(616);

      expect(country).to.have.deep.property("country", "Poland");
      expect(country).to.have.deep.property("alpha2", "PL");
      expect(country).to.have.deep.property("alpha3", "POL");
      expect(country).to.have.deep.property("num3", "616");
    });

    it("returns a country object by num-3 (string)", function () {
      const country = iso3166Lookup.findNum3("036");

      expect(country).to.have.deep.property("country", "Australia");
      expect(country).to.have.deep.property("alpha2", "AU");
      expect(country).to.have.deep.property("alpha3", "AUS");
      expect(country).to.have.deep.property("num3", "036");
    });

    it("returns a country object by num-3 and optype (obj)", function () {
      const country = iso3166Lookup.findNum3(578, "obj");

      expect(country).to.have.deep.property("country", "Norway");
      expect(country).to.have.deep.property("alpha2", "NO");
      expect(country).to.have.deep.property("alpha3", "NOR");
      expect(country).to.have.deep.property("num3", "578");
    });

    it("returns country name by num-3 and optype (name)", function () {
      expect(iso3166Lookup.findNum3(578, "name")).to.be.equal("Norway");
    });

    it("returns an alpha2 code by num-3 and optype (alpha2)", function () {
      expect(iso3166Lookup.findNum3(578, "alpha2")).to.be.equal("NO");
    });

    it("returns an alpha3 code by num-3 and optype (alpha3)", function () {
      expect(iso3166Lookup.findNum3(578, "alpha3")).to.be.equal("NOR");
    });
  });
});
