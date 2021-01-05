import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import {Home as HomePage} from "../pages/Home";
import {Progress} from "../pages/Progress";
import {Videos} from "../pages/Videos";

const Tab = createBottomTabNavigator();

export const Tabs = () => (
    <Tab.Navigator>
        <Tab.Screen
            name={'Home'}
            component={HomePage}
        />
        <Tab.Screen
            name={'Progress'}
            component={Progress}
        />
        <Tab.Screen
            name={'Videos'}
            component={Videos}
        />
    </Tab.Navigator>
)
