import {Button, SafeAreaView} from 'react-native';
import React, {FC} from 'react';

import {Color} from '../enums/Color';

export const Landing: FC = () => {
    return (
        <SafeAreaView>
            <Button
                onPress={(): null => null}
                title={'Login'}
                color={Color.red}
                testID={'loginButton'}
            />
        </SafeAreaView>
    );
};
