const assert = require('assert');
const processor = require('../processor.js');

describe("transmission processor", function() {

    it("takes a string and returns an object", function() {
        let result = processor("9701::<489584872710>");     // processor function is called, with output value being stored in a result variable
        assert.strictEqual(typeof result, "object");        // parameters in assert.strictEqual are compared for strict equality (typeof result should return an "object" string if the result is of type object)
    });

    it("returns -1 if '::' not found", function() {
        let result = processor("9701<489584872710>");
        assert.strictEqual(result, -1);
    });

    it("returns id in object", function() {
        let result = processor("9701::<489584872710>");
        assert.notStrictEqual(result.id, undefined);        // use notStrictEqual because you want to make sure result.id isn't referencing a nonexistent property
    });

    it("converts id to a number", function(){
        let result = processor("9701::<489584872710>");
        assert.strictEqual(result.id, 9701);    // initially put (typeof result, 'number') as parameters, but (result.id, 9701) checks to make sure the actual id numbers are correctly taken
    });

    it("returns rawData in object", function() {
        let result = processor("9701::<489584872710>");
        assert.notStrictEqual(result.rawData, undefined);   // notStrictEqual again checks to make sure there is data in the rawData property
    });

    it("returns -1 for rawData if missing < at position 0", function() {
        let result = processor("9701::489584872710>");
        assert.strictEqual(result.rawData, -1);
        let result2 = processor("9701::8729740349572>0912");
        assert.strictEqual(result2.rawData, -1);
        let result3 = processor("9701::4872<97403495720912");
        assert.strictEqual(result3.rawData, -1);
        let result4 = processor("9701::487297403495720912");
        assert.strictEqual(result4.rawData, -1);
    });

    it("returns -1 for rawData if a duplicate < occurs", function() {
        let result = processor("9701::<487297403495<720912>");
        assert.strictEqual(result.rawData, -1);
    });

    it("trims leading and trailing whitespace from transmission", function() {
        let result = processor("  9701::<489584872710> ");
        assert.strictEqual(result.rawData, "489584872710");
        assert.strictEqual(result.id, 9701);
    });

    it("returns -1 if the id part of the transmission cannot be converted to a number", function() {
        let result = processor("97g01::<489584872710>");
        assert.strictEqual(result.id, -1);
    });

    it("returns -1 if more than one '::' is found in transmission", function() {
        let result = processor("97::01::<489584872710>");
        assert.strictEqual(result, -1);
    });

    it("does not include the < > symbols in the value assigned to rawData", function() {
        let result = processor("9701::<489584872710>");
        assert.strictEqual(result.rawData, '489584872710');
    });

    it("returns -1 for the value of rawData if anything besides numbers are present between the < > symbols", function() {
        let result = processor("9701::<489584f872710>");
        assert.strictEqual(result.rawData, -1);
    });
});