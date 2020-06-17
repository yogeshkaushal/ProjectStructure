import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from '../components/screens';

const Stack = createStackNavigator()

const mainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Dashboard' component={Dashboard} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default mainStack;