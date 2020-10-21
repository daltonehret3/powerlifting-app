import {SafeAreaView, View} from 'react-native';
import React, {FC} from 'react';

import {Color} from '../enums/Color';
import {Button} from '../components/generic/Button';
import {useAppNavigation} from '../../navigation';

export const Landing: FC = () => {
    const navigation = useAppNavigation();

    return (
        <SafeAreaView
            style={{
                alignItems: 'center',
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center'
            }}
        >
            <View>
                <Button
                    onPress={() => navigation.navigate('Home')}
                    buttonText={'Login'}
                    buttonStyles={{backgroundColor: Color.red}}
                    testID={'loginButton'}
                />
            </View>
        </SafeAreaView>
    );
};
