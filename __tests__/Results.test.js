import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Results from '../components/Results'
describe('Results', () => {
    let expectedProps;

    beforeEach(() => {
        expectedProps = {
            advanced: advancedMode,
            selected: selected,
            setselected:{setselected},
            setscore:{setScore}
        };
    });
    test('should render the stated props', () => {
        const {getByText, getByAltText} = render(<Results {...expectedProps} />);
        const advanced = getByText(expectedProps.advancedMode);
        const selected = getByText(expectedProps.selected);
        const setscore = getByAltText(expectedProps.setScore);
        const setselected = getByAltText(expectedProps.setselected);


        expect(advanced).toBeVisible();
        expect(selected).toBeVisible();
        expect(setscore).toBeVisible();
        expect(setselected).toBeVisible();

    })
})