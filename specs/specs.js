describe('convertToRomanNumeral', function() {
	it("count up one", function() {
		expect(convertToRomanNumeral(1)).to.equal("I")
	});

	it("count up to four", function() {
		expect(convertToRomanNumeral(4)).to.equal("IIII")
	});

	it("count up to fifty-one", function() {
		expect(convertToRomanNumeral(51)).to.equal("LI")
	});

	it("count up to three thousand eight hundred twenty one", function() {
		expect(convertToRomanNumeral(3826)).to.equal("MMMDCCCXXVI")
	});

	it("count up to nine", function() {
		expect(convertToRomanNumeral(9)).to.equal("IX")
	});

});

describe('checkArray', function() {

	it("check difference", function() {
		expect(checkArray([1000,40,1], 1)).to.equal(1)
	});

});

describe('reverse', function() {

	it("reverse LIII to IIIL", function() {
		expect(reverseString("LIII")).to.equal("IIIL")
	});

});

describe('format', function() {

	it("check difference", function() {
		expect(format("CCCCLXXXXVIIII", ["M", "D", "C", "L", "V", "I"])).to.equal("CDXCIX")
	});

});
