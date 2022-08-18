import {cleanup, render, screen, fireEvent} from "@testing-library/react";
import Listbyevent from "./Listbyevent";
afterEach(cleanup);
test("Listbyevent Test1",()=>{
    render(<Listbyevent/>);
    fireEvent.click(screen.getByRole("button",{name:Read}));
    expect(screen.getByText("Buy Grocery")).toBeDefined();
});