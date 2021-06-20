const substitutionModule = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution()", () => {
    it("should return false if the substitution alphabet is missing", () => {
        const actual = substitutionModule.substitution("message");
        expect(actual).to.be.false;
    });
    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
        const actual = substitutionModule.substitution("message", "short");
        expect(actual).to.be.false;
    });
    it("should return false if the substitution alphabet does not contain unique characters", () => {
        const actual = substitutionModule.substitution("message", "abcabcabcabcabcabcabcabcab");
        expect(actual).to.be.false;
    });
    it("should encode a message by using the given substitution alphabet", () => {
        const expected = 'ykrrpik';
        const actual = substitutionModule.substitution("message", "plmoknijbuhvygctfxrdzeswaq");
        expect(actual).to.equal(expected);
    });
    it("should work with any kind of key with unique characters", () => {
        const expected = 'ysii.rs';
        const actual = substitutionModule.substitution("message", ".waeszrdxtfcygvuhbijnokmpl");
        expect(actual).to.equal(expected);
    });
    it("should preserve spaces", () => {
        const expected = 'yp ysii.rs';
        const actual = substitutionModule.substitution("my message", ".waeszrdxtfcygvuhbijnokmpl");
        expect(actual).to.equal(expected);
    });
    it("should decode a message by using the given substitution alphabet", () => {
        const expected = 'message';
        const actual = substitutionModule.substitution("ykrrpik", "plmoknijbuhvygctfxrdzeswaq", ecnode = false);
        expect(actual).to.equal(expected);
    });
    it("should work with any kind of key with unique characters", () => {
        const expected = 'message';
        const actual = substitutionModule.substitution("ysii.rs", ".waeszrdxtfcygvuhbijnokmpl", encode = false);
        expect(actual).to.equal(expected);
    });
    it("should preserve spaces", () => {
        const expected = 'my message';
        const actual = substitutionModule.substitution("yp ysii.rs", ".waeszrdxtfcygvuhbijnokmpl", encode = false);
        expect(actual).to.equal(expected);
    });
});
