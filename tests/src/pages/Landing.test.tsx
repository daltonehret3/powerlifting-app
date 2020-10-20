import {render, RenderAPI, within} from '@testing-library/react-native';

import React from 'react';

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
    });
});
