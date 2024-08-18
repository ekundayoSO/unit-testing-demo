'use strict';

test('This is the first test', () => {
    console.log('first test');
    
});

it('This is test 2', () => {
    console.log('test 2');  
});

beforeAll(() => {
    console.log('beforeAll', 'init before all tests');
});

afterAll(() => {
  console.log("afterAll", "cleaning after all tests");
});

describe('This is a group A', () => {
    // Run before each test
    beforeEach(() => {
        console.log('beforeEach', 'run before each in A');   
    })
    // First test in A
    test('first test in group A', () => {
        console.log('first in A');  
    });
    afterEach(() => {
        console.log("afterEach", "run after each in A");
    });
    // Second test in A
    test('second in A', () => {
        console.log('second in A');  
    });
});

describe('This is group 1 in B', () => {
    beforeAll(() => {
        console.log('beforeAll in B');
        
    })
    test('test 1 in B', () => {
        console.log('test 1 in B');   
    });
    test("test 2 in B", () => {
      console.log("test 2 in B");
    });
    describe("This is group 2 in B", () => {
      test("test 1 in B2", () => {
        console.log("1 in B2");
      });
    });
});

describe('Test concatenation function', () => {
    // Accept only numbers
    // const concat = (partA, partB) => partA + partB;

    // Accept only strings 
    const concat = (partA, partB) => "" + partA + partB;

    test('testing concat("first", "last") returns "firstlast"', () => {
        expect(concat('first', 'last')).toBe('firstlast');
    });
    test('testing concat(1, 2) returns "12"', () => {
        expect(concat(1, 2)).toBe("12");
    })
    // test('testing concat(1, 2) returns 3', () => {
    //   expect(concat(1, 2)).toBe(3);
    // });
});

describe('This is test for exception', () => {
    function testFunction() {
        throw Error('This is an exception');
    };
    test('function throws an exception', () => {
        expect(() => testFunction()).toThrow('This is an exception');
    })
})



