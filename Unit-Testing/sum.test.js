const sum = require('./sum');

// ////////// TESTING EXACT QUALITY/////////////
test('adds 1 + 2  to equal 3', ()=>{
    expect(sum(2,1)).toBe(3);
}); 

test("two plus three is five", ()=>{
    expect(sum(2,3)).toBe(5);
});

// ///////// TESTING OBJECTS ////////////////////
test('Object assignment', ()=>{
    const data = {one: 1};
    data['two'] = 4;
    expect(data).toEqual({one: 1, two: 4});
});

test('adding positive numbers is not zero', () => {
    for(let a = 1; a < 10; a++){
        for(let b = 2; b < 10; b++){
            expect(a + b).not.toBe(0);
        }
    }
})

// ///////////Truthiness///////////
test('null', ()=>{
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
})
test('zero', ()=>{
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
})

// // ///////////Numbers///////////
test('two plus two', ()=> {
    const value = 3 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(6);
    expect(value).toBeLessThanOrEqual(4.5);

    //toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);

})

test('adding floating point numbers', () =>{
    const value = 0.1 + 0.2;
    // expect(value).toBe(0.3);

    expect(value).toBeCloseTo(0.3);
})

// // ///////////Strings///////////
test('there is no W in am', () => {
    expect('team').not.toMatch(/I/)
})

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/)
})
