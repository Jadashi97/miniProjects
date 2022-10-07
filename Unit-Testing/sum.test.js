const sum = require('./sum');

////////// TESTING EXACT QUALITY/////////////
// test('adds 1 + 2  to equal 3', ()=>{
//     expect(sum(2,1)).toBe(3);
// }); 

// test("two plus three is five", ()=>{
//     expect(sum(2,3)).toBe(5);
// });

///////// TESTING OBJECTS ////////////////////
// test('Object assignment', ()=>{
//     const data = {one: 1};
//     data['two'] = 4;
//     expect(data).toEqual({one: 1, two: 4});
// });

test('adding positive numbers is not zero', () => {
    for(let a = 1; a < 10; a++){
        for(let b = 2; b < 10; b++){
            expect(a + b).not.toBe(0);
        }
    }
})