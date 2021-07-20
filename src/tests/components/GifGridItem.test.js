import React from "react";
import { GifGridItem } from "../../components/GifGridItem";
import { shallow } from "enzyme";

describe("Pruebas en GifGridItem", () => {
  const title = "title";
  const url = "https://localhost/algo.jpg";

  let wrapper = shallow(<GifGridItem title={title} url={url} />);

  beforeEach(() => {
    wrapper = shallow(<GifGridItem title={title} url={url} />);
  });

  test("debe de mostrar <GifGridItem/>", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de tener un parrafo con el title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("debe de tener laimagen igual a la url y  alt de las props", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("Debe de tener animate__fadeIn", () => {
    const div = wrapper.find("div");

    const className = div.prop("className");

    expect(className.includes("animate__fadeIn")).toBe(true);
  });
});
