import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Landing} from './src/pages/Landing';
import {Tabs} from './src/navigation/tabStack';

const RootStack = createStackNavigator();

export const App = () => (
    <NavigationContainer>
        <RootStack.Navigator>
            <RootStack.Screen
                name={'Landing'}
                component={Landing}
                options={{headerShown: false}}
            />
            <RootStack.Screen
                name={'Home'}
                component={Tabs}
                options={{headerShown: false}}
            />
        </RootStack.Navigator>
    </NavigationContainer>
);
