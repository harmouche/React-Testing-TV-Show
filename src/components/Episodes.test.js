import React from "react";
import { render } from "@testing-library/react";

import Episodes from "./Episodes";

test("Renders Episodes without props, and again with props", () => {
    const mockData = { 
        id: '454',
        image: { medium: 'medium_image'},
        name: 'name',
        season: 2,
        number: 6,
        summary: '<p>Summary</p>',
        runtime: 20
    }
    const { queryAllByText, rerender } = render(<Episodes episodes={[]}/>);
    expect(queryAllByText(/season/i)).toHaveLength(0);
    rerender(<Episodes episodes={[mockData]}/>);
    expect(queryAllByText(/name/i)).toHaveLength(1);

})