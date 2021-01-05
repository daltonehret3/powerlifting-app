import React from 'react';
import {render} from "@testing-library/react-native";

import {Progress} from "../../../src/pages/Progress";

describe('Progress', () => {
    const {getByText} = render(<Progress />);

    it('should render the text', () => {
        const text = getByText('This will be the PROGRESS page.');

        expect(text).toBeDefined();
    });
});
