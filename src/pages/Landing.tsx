import {SafeAreaView, View} from 'react-native';
import React, {FC} from 'react';

import {Color} from '../enums/Color';
import {Button} from '../components/generic/Button';

export const Landing: FC = () => {
    return (
        <SafeAreaView style={{alignItems: 'center', flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
            <View>
                <Button
                    onPress={(): null => null}
                    buttonText={'Login'}
                    buttonStyles={{backgroundColor: Color.red}}
                    testID={'loginButton'}
                />
            </View>
        </SafeAreaView>
    );
};
