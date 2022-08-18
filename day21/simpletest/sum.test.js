import sum from "./sum";
describe("test suite 1",()=>{
test("sum 4 + 5 equals 9",()=>{
    expect(sum(4,5)).toBe(9);
});
it("sum 3+2 equls 5",()=>{
    expect(sum(3,2)).toBe(5);
});
});