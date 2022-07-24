import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import { ClickCounter } from "./click-counter";

describe("Test ClickCounter", () => {
  it("should inc/dec counter when buttons inc/dec clicked", () => {
    render(<ClickCounter />);

    const counter = screen.getByRole("heading");
    const increaseBtn = screen.getByRole("button", { name: "Increase" });
    const decreaseBtn = screen.getByRole("button", { name: "Decrease" });

    expect(counter.textContent).toBe("Counter: 0");

    fireEvent.click(increaseBtn);
    expect(counter.textContent).toBe("Counter: 1");

    fireEvent.click(increaseBtn);
    expect(counter.textContent).toBe("Counter: 2");

    fireEvent.click(decreaseBtn);
    expect(counter.textContent).toBe("Counter: 1");

    fireEvent.click(decreaseBtn);
    expect(counter.textContent).toBe("Counter: 0");
  });
});
