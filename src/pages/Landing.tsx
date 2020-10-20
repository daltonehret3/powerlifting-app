import React, {FC} from 'react';
import {Button, SafeAreaView} from 'react-native';
import { Color } from '../enums/Color';

export const Landing: FC = () => {
    return (
        <SafeAreaView>
            <Button
                onPress={() => null}
                title={'Login'}
                color={Color.red}
            />
        </SafeAreaView>
    );
};
