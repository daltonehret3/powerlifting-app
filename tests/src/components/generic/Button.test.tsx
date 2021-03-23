import {Chance} from 'chance';
import React from 'react';
import {render, RenderAPI} from '@testing-library/react-native';

import {Button, IButtonProps} from "../../../../src/components/generic/Button";

const chance = new Chance();

describe('Button', () => {
    let testRenderResult: RenderAPI,
        expectedProps: IButtonProps;

    beforeEach(() => {
        expectedProps = {
            buttonStyles: {},
            buttonText: chance.string(),
            onPress: jest.fn(),
            testID: chance.string()
        };

        testRenderResult = render(<Button {...expectedProps} />);
    });

    it('should render the button', () => {
        const button = testRenderResult.getByTestId(expectedProps.testID);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const buttonText = button.children[0].props.children

        expect(buttonText).toStrictEqual(expectedProps.buttonText)
    });
});
