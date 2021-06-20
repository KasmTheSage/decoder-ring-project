const polybiusModule = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
    it("should encode a message by translating each letter to number pairs", () => {
        const expected = '23513434112251';
        const actual = polybiusModule.polybius("message");
        expect(actual).to.equal(expected);
    });
    it("should translate both 'i' and 'j' to 42", () => {
        const expected = '424222221351';
        const actual = polybiusModule.polybius("jiggle");
        expect(actual).to.equal(expected);
    });
    it("should leave spaces as is", () => {
        const expected = '2345 23513434112251';
        const actual = polybiusModule.polybius("my message");
        expect(actual).to.equal(expected);
    });
    it("should decode a message by translating each pair of numbers into a letter", () => {
        const expected = 'message';
        const actual = polybiusModule.polybius("23513434112251", encode = false);
        expect(actual).to.equal(expected);
    });
    it("should translate 42 to both 'i' and 'j'", () => {
        const actual = polybiusModule.polybius("424222221351", encode = false);
        expect(actual).to.include("i");
    });
    it("should leave spaces as is", () => {
        const actual = polybiusModule.polybius("2345 23513434112251", encode = false);
        expect(actual).to.include(" ");
    });
    it("should return false if the length of all numbers is odd", () => {
        const actual = polybiusModule.polybius("2345 235134341122514", encode = false);
        expect(actual).to.be.false;
    });
});
