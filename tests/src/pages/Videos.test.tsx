import React from 'react';
import {render} from "@testing-library/react-native";

import {Videos} from "../../../src/pages/Videos";

describe('Videos', () => {
    const {getByText} = render(<Videos />);

    it('should render the text', () => {
        const text = getByText('This will show the videos for workouts.');

        expect(text).toBeDefined();
    });
});
