import React from "react";
import { Button } from "./button";
import { render, fireEvent, getByText } from "@testing-library/react";

describe("Button tests", () => {
	const click = jest.fn();
	const renderButton = (disabled?: boolean) => {
		return render(<Button text="Test Btn" size="small" onClick={click} color="blue" disabled={disabled} />);
	};
	it("renders correctly", () => {
		expect(renderButton().asFragment()).toMatchSnapshot();
	});
	it("renders the text prop correctly", () => {
		const button = renderButton().asFragment();
		expect(button).toHaveTextContent("Test Btn");
	});
	it("triggers click", () => {
		const button = renderButton().container;
		fireEvent.click(getByText(button, "Test Btn"));
		expect(click).toHaveBeenCalled();
	});
	it("doesnt triggers click if is disabled", () => {
		const button = renderButton(true).container;
		fireEvent.click(getByText(button, "Test Btn"));
		expect(click).not.toHaveBeenCalled();
	});
});
