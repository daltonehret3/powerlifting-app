import React from 'react';
import {render} from "@testing-library/react-native";

import {Home} from "../../../src/pages/Home";

describe('Home', () => {
    const {getByText} = render(<Home />);

    it('should render the text', () => {
        const text = getByText('You Made it');

        expect(text).toBeDefined();
    });
});
