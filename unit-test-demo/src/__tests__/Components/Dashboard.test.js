import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Dashboard from "Views/Dashboard";

test('render the Dashboard Component', () => {
    const { getByText, getByLabelText } = render(<Dashboard />)

    expect(getByText('EMPLOYEE FORM')).toBeInTheDocument();
    expect(getByLabelText('First name')).toBeInTheDocument();
})

test('submit the form', () => {
    const { getByText, getByLabelText } = render(<Dashboard />);


    fireEvent.change(getByLabelText('First name'), { target: { value: 'Isha' } });
    fireEvent.change(getByLabelText('Last name'), { target: { value: 'vaghamshi' } });
    fireEvent.change(getByLabelText('Email Address'), { target: { value: 'isha@gmail.com' } });
    fireEvent.change(getByLabelText('Employee ID'), { target: { value: '6456' } });
    fireEvent.change(getByLabelText('City'), { target: { value: 'rajkot' } });
    fireEvent.change(getByLabelText('State/Province/Region'), { target: { value: 'Gujarat' } });
    fireEvent.change(getByLabelText('Zip / Postal code'), { target: { value: '2456987' } });
    fireEvent.change(getByLabelText('Country'), { target: { value: 'India' } });


    fireEvent.click(getByText('Submit'));


});
