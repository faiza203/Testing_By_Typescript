import React from 'react';
import Timer from "./Timer";
import { shallow } from "enzyme"
describe("Timer", () => {
  let container:any

  beforeEach(() => (container = shallow(<Timer />)))

  it("should render a <div />", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1)
  })
})