import React from 'react';
import {render, RenderAPI, within, fireEvent} from '@testing-library/react-native';

import {Landing} from "../../../src/pages/Landing";

describe('Landing', () => {
    let testRenderResult: RenderAPI;

    beforeEach(() => {
        testRenderResult = render(<Landing />);
    });

    it('should render the login button', () => {
        const button = testRenderResult.getByTestId('loginButton');
        const buttonText = within(button).getByText('Login');

        expect(button).toBeDefined();
        expect(buttonText).toBeDefined();
        expect(button)
    });

    it('should do nothing when the login button is pressed', () => {
        const button = testRenderResult.getByTestId('loginButton');

        fireEvent.press(button);

        expect(button).toBeDefined();
    });
});
