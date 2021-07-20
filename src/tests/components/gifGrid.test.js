import React from "react";
import { GifGrid } from "../../components/GifGrid";
import { shallow } from "enzyme";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en GifGrid", () => {
  const category = "evangelion";

  test("debe de mostrar <GifGrid/>", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar items cuando se cargan imagenes useFetchGifs", () => {
    const gifs = [
      {
        id: "abc",
        url: "https://localhost/algo.jpg",
        title: "Cualquier cosa",
      },
      {
        id: "abd",
        url: "https://localhost/algo.jpg",
        title: "Cualquier cosa",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchInlineSnapshot(`
      <Fragment>
        <h3
          className="animate__animated animate__flash animate__delay-1s "
        >
          evangelion
        </h3>
        <div
          className="card-grid"
        >
          <GifGridItem
            id="abc"
            key="abc"
            title="Cualquier cosa"
            url="https://localhost/algo.jpg"
          />
          <GifGridItem
            id="abd"
            key="abd"
            title="Cualquier cosa"
            url="https://localhost/algo.jpg"
          />
        </div>
      </Fragment>
    `);
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
