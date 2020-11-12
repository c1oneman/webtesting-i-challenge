const { repair, succeed, fail, get } = require("./enhancer.js");
// test away!

it("should run tests", function() {
  expect(true).toBe(true);
});

describe("enhancer.js", function() {
  describe(".repair()", function() {
    it("should return an item where durability: 100", function() {
      expect(repair({ name: "name", durability: 10, enhancement: 10 })).toEqual(
        {
          name: "name",
          durability: 100,
          enhancement: 10
        }
      );
    });
    it("should throw an error if no item is passed", function() {
      expect(() => {
        repair();
      }).toThrow();
    });
    it("should throw an error if item has no Name", function() {
      expect(() => {
        repair({ durability: 100, enhancement: 10 });
      }).toThrow();
    });
    it("should throw an error if item has no Durability", function() {
      expect(() => {
        repair({ name: "name", enhancement: 10 });
      }).toThrow();
    });
    it("should throw an error if item has no Enhancement", function() {
      expect(() => {
        repair({ name: "name", durability: 100 });
      }).toThrow();
    });
    it("should throw an error if Durability is less than 0", function() {
      expect(() => {
        repair({ name: "name", durability: -1, enhancement: 10 });
      }).toThrow();
    });
    it("should throw an error if Durability is greater than 100", function() {
      expect(() => {
        repair({ name: "name", durability: 200, enhancement: 10 });
      }).toThrow();
    });
    it("should throw an error if Enhancement is less than 0", function() {
      expect(() => {
        repair({ name: "name", durability: 200, enhancement: -1 });
      }).toThrow();
    });
    it("should throw an error if Enhancement is greater than 20", function() {
      expect(() => {
        repair({ name: "name", durability: 200, enhancement: 21 });
      }).toThrow();
    });
  });
});

describe("enhancer.js", function() {
  describe(".succeed()", function() {
    it("should increase enhancement by 1", function() {
      expect(
        succeed({ name: "name", durability: 10, enhancement: 10 })
      ).toEqual({
        name: "name",
        durability: 10,
        enhancement: 11
      });
    });
    it("should not increase enhancement more than 20", function() {
      expect(
        succeed({ name: "name", durability: 10, enhancement: 20 })
      ).toEqual({ name: "name", durability: 10, enhancement: 20 });
    });
    it("should throw an error if no item is passed", function() {
      expect(() => {
        succeed();
      }).toThrow();
    });
    it("should throw an error if item has no Name", function() {
      expect(() => {
        succeed({ durability: 100, enhancement: 10 });
      }).toThrow();
    });
    it("should throw an error if item has no Durability", function() {
      expect(() => {
        succeed({ name: "name", enhancement: 10 });
      }).toThrow();
    });
    it("should throw an error if item has no Enhancement", function() {
      expect(() => {
        succeed({ name: "name", durability: 100 });
      }).toThrow();
    });
    it("should throw an error if Durability is less than 0", function() {
      expect(() => {
        succeed({ name: "name", durability: -1, enhancement: 10 });
      }).toThrow();
    });
    it("should throw an error if Durability is greater than 100", function() {
      expect(() => {
        succeed({ name: "name", durability: 200, enhancement: 10 });
      }).toThrow();
    });
    it("should throw an error if Enhancement is less than 0", function() {
      expect(() => {
        succeed({ name: "name", durability: 200, enhancement: -1 });
      }).toThrow();
    });
    it("should throw an error if Enhancement is greater than 20", function() {
      expect(() => {
        succeed({ name: "name", durability: 200, enhancement: 21 });
      }).toThrow();
    });
  });
});

describe("enhancer.js", function() {
  describe(".fail()", function() {
    it("should decrease durability by 5 is enhancement is less than 15", function() {
      expect(fail({ name: "name", durability: 50, enhancement: 10 })).toEqual({
        name: "name",
        durability: 45,
        enhancement: 10
      });
    });
    it("should decrease durability by 10 if enhancement is 15", function() {
      expect(fail({ name: "name", durability: 50, enhancement: 15 })).toEqual({
        name: "name",
        durability: 40,
        enhancement: 15
      });
    });
    it("should decrease enhancement by 1 as well as durability by 10 if enhancement is 16 or greater", function() {
      expect(fail({ name: "name", durability: 50, enhancement: 19 })).toEqual({
        name: "name",
        durability: 40,
        enhancement: 18
      });
    });
    it("should throw an error if no item is passed", function() {
      expect(() => {
        fail();
      }).toThrow();
    });
    it("should throw an error if item has no Name", function() {
      expect(() => {
        fail({ durability: 100, enhancement: 10 });
      }).toThrow();
    });
    it("should throw an error if item has no Durability", function() {
      expect(() => {
        fail({ name: "name", enhancement: 10 });
      }).toThrow();
    });
    it("should throw an error if item has no Enhancement", function() {
      expect(() => {
        fail({ name: "name", durability: 100 });
      }).toThrow();
    });
    it("should throw an error if Durability is less than 0", function() {
      expect(() => {
        fail({ name: "name", durability: -1, enhancement: 10 });
      }).toThrow();
    });
    it("should throw an error if Durability is greater than 100", function() {
      expect(() => {
        fail({ name: "name", durability: 200, enhancement: 10 });
      }).toThrow();
    });
    it("should throw an error if Enhancement is less than 0", function() {
      expect(() => {
        fail({ name: "name", durability: 200, enhancement: -1 });
      }).toThrow();
    });
    it("should throw an error if Enhancement is greater than 20", function() {
      expect(() => {
        fail({ name: "name", durability: 200, enhancement: 21 });
      }).toThrow();
    });
  });
});

describe("enhancer.js", function() {
  describe(".get()", function() {
    it("should be unchanged if Enhancement is 0", function() {
      expect(get({ name: "name", durability: 50, enhancement: 0 })).toEqual({
        name: "name",
        durability: 50,
        enhancement: 0
      });
    });
    it("should add the Enhancement to name", function() {
      expect(get({ name: "name", durability: 50, enhancement: 15 })).toEqual({
        name: "[+15] name",
        durability: 50,
        enhancement: 15
      });
    });
    it("should throw an error if no item is passed", function() {
      expect(() => {
        get();
      }).toThrow();
    });
    it("should throw an error if item has no Name", function() {
      expect(() => {
        get({ durability: 100, enhancement: 10 });
      }).toThrow();
    });
    it("should throw an error if item has no Durability", function() {
      expect(() => {
        get({ name: "name", enhancement: 10 });
      }).toThrow();
    });
    it("should throw an error if item has no Enhancement", function() {
      expect(() => {
        get({ name: "name", durability: 100 });
      }).toThrow();
    });
    it("should throw an error if Durability is less than 0", function() {
      expect(() => {
        get({ name: "name", durability: -1, enhancement: 10 });
      }).toThrow();
    });
    it("should throw an error if Durability is greater than 100", function() {
      expect(() => {
        get({ name: "name", durability: 200, enhancement: 10 });
      }).toThrow();
    });
    it("should throw an error if Enhancement is less than 0", function() {
      expect(() => {
        get({ name: "name", durability: 200, enhancement: -1 });
      }).toThrow();
    });
    it("should throw an error if Enhancement is greater than 20", function() {
      expect(() => {
        get({ name: "name", durability: 200, enhancement: 21 });
      }).toThrow();
    });
  });
});