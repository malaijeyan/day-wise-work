import sum from "./sum";
test("snapshot testing-sum",()=>{
    expect(sum(4,5)).toMatchSnapshot();
    expect(sum(3,4)).toMatchSnapshot();
    expect(sum(2,2)).toMatchSnapshot();
    expect(sum(1,8)).toMatchSnapshot();
    expect(sum(-1,6)).toMatchSnapshot();
})










