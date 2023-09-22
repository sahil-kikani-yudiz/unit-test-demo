import React from "react";
import { render, fireEvent, findByText } from "@testing-library/react";
import Dashboard from "Views/Dashboard";


describe('Dashboard Component', () => {

  test('render the Dashboard Component', () => {
    const { getByText, getByLabelText } = render(<Dashboard />)

    expect(getByText('EMPLOYEE FORM')).toBeInTheDocument();
    expect(getByLabelText('First name')).toBeInTheDocument();
  })

  test('submit the form', async () => {
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

    await (() => {
      expect(getByText('Isha')).toBeInTheDocument();
      expect(getByText('vaghamshi')).toBeInTheDocument();
      expect(getByText('isha@gmail.com')).toBeInTheDocument();
      expect(getByText('6456')).toBeInTheDocument();
      expect(getByText('rajkot')).toBeInTheDocument();
      expect(getByText('Gujarat')).toBeInTheDocument();
      expect(getByText('2456987')).toBeInTheDocument();
      expect(getByText('India')).toBeInTheDocument();
    });

  })

})