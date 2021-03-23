import React from 'react';
import {
    render,
    RenderAPI,
    within,
    fireEvent
} from '@testing-library/react-native';
import {ReactTestInstance} from 'react-test-renderer';

import {Landing} from "../../../src/pages/Landing";
import {useAppNavigation} from "../../../navigation";

jest.mock('../../../navigation');

describe('Landing', () => {
    let testRenderResult: RenderAPI,
        expectedNavigation: {navigate: any};

    beforeEach(() => {
        expectedNavigation = {navigate: jest.fn()};

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        useAppNavigation.mockReturnValue(expectedNavigation)
        testRenderResult = render(<Landing />);
    });

    it('should render the login button', () => {
        const button = testRenderResult.getByTestId('loginButton');
        const buttonText = within(button).getByText('Login');

        expect(button).toBeDefined();
        expect(buttonText).toBeDefined();
        expect(button)
    });

    describe('fireEvent', () => {
        let button: ReactTestInstance;

        beforeEach(() => {
            button = testRenderResult.getByTestId('loginButton');
        });

        it('should call navigation when the button is pressed', () => {
            fireEvent.press(button);

            expect(expectedNavigation.navigate).toHaveBeenCalledTimes(1);
            expect(expectedNavigation.navigate).toHaveBeenCalledWith('Home');
        });
    });
});
