import {SafeAreaView, View} from 'react-native';
import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Color} from '../enums/Color';
import {Button} from '../components/generic/Button';

export const Landing: FC = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{alignItems: 'center', flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
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
