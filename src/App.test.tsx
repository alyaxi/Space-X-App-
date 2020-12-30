      
import React from "react"
import {shallow} from "enzyme"
import App from "./App"


describe("App", () => {
	it("should render a <div />", () => {
		const container = shallow(<App />);
		expect(container.find("div").length).toEqual(1);
});
});

test("renders the app component" , () => {
	const component = shallow(<App/>);
	expect(component).toMatchSnapshot();
  })