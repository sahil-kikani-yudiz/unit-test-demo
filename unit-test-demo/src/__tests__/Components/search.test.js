import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Dashboard from "Views/Dashboard";


describe('Dashboard Component', () => {

    test('search functionality in dashboard', async () => {
        const { getByLabelText } = render(<Dashboard />)


        fireEvent.change(getByLabelText('Search...'), { target: { value: 'Isha' } });

        await (() => {
            expect(getByLabelText('Search...')).toHaveValue('Isha');
            const value = screen.toBeInTheDocument(/Isha/i)
            expect(value).toHaveLength(1)
        })

    })

})
