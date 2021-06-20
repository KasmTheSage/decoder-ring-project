const caesarModule = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar()", () => {
    it("should return false if the shift amount is 0", () => {
        const actual = caesarModule.caesar("zebra magazine", 0);
        expect(actual).to.be.false;
    });
    it("should false if the shift amount is above 25", () => {
        const actual = caesarModule.caesar("zebra magazine", 26);
        expect(actual).to.be.false;
    });
    it("should return false if the shift amount is less then -25", () => {
        const actual = caesarModule.caesar("zebra magazine", -26);
        expect(actual).to.be.false;
    });
    it("should encode a message by shifting the letters", () => {
        const expected = "phvvdjh";
        const actual = caesarModule.caesar("message", 3);
        expect(actual).to.equal(expected);
    });
    it("should leave spaces and symbols as is", () => {
        const expected = "d phvvdjh.";
        const actual = caesarModule.caesar("a message.", 3);
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        const expected = "d phvvdjh";
        const actual = caesarModule.caesar("A message", 3);
        expect(actual).to.equal(expected);
    });
    it("should appropriately handle letters at the end of the alphabet", () => {
        const expected = "cheud pdjdclqh";
        const actual = caesarModule.caesar("zebra magazine", 3);
        expect(actual).to.equal(expected);
    });
    it("should allow for a negative shift that will shift to the left", () => {
        const expected = "wbyox jxdxwfkb";
        const actual = caesarModule.caesar("zebra magazine", -3);
        expect(actual).to.equal(expected);
    });
    it("should decode a message by shifting the letters in the opposite direction", () => {
        const expected = "message";
        const actual = caesarModule.caesar("phvvdjh", 3, encode = false);
        expect(actual).to.equal(expected);
    });
    it("should leaves spaces and other symbols as is", () => {
        const expected = "a message.";
        const actual = caesarModule.caesar("d phvvdjh.", 3, encode = false);
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        const expected = "a message";
        const actual = caesarModule.caesar("D pHvvdjh", 3, encode = false);
        expect(actual).to.equal(expected);
    });
    it("should appropriately handle letters at the end of the alphabet", () => {
        const expected = "zebra magazine";
        const actual = caesarModule.caesar("cheud pdjdclqh", 3, encode = false);
        expect(actual).to.equal(expected);
    });
    it("should allow for a negative shift that will shift to the left", () => {
        const expected = "zebra magazine";
        const actual = caesarModule.caesar("wbyox jxdxwfkb", -3, encode = false);
        expect(actual).to.equal(expected);
    });
});
