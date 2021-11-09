import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home';
import Login from './login';
import UserRegister from './user-register';
import Presentation from './presentation';

const stack = createNativeStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <stack.Navigator
                headerMode="none"
                screenOptions={{
                    headerShown: false,
                    contentStyle: {
                        backgroundColor: '#fff',
                    },
                }}
            >
                <stack.Screen name="Home" component={Home} />
                <stack.Screen name="Login" component={Login} />
                <stack.Screen name="UserRegister" component={UserRegister} />
                <stack.Screen name="Presentation" component={Presentation} />
            </stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;