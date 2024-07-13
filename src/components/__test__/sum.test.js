import { sum } from "../sum"
test('check sum of two positive numbers', ()=>{
    expect(sum(2,10)).toBe(12)
    expect(sum(100,10)).toBe(110)

})   