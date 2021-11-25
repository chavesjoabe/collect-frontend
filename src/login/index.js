import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    ScrollView,
    Text,
    TextInput,
    View,
} from 'react-native';
import apiClient from '../api/api.client';
import MainButton from '../shared/components/main-button';
import { styles } from './login.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storageConstants from '../shared/constants/storage.constants';

export default function Login() {
    const [email, setEmail] = useState('ryan1@fiap.com');
    const [password, setPassword] = useState('123');
    const [display, setDisplay] = useState('none');
    const navigation = useNavigation();

    const handlePressBtn = async () => {
        const user = {
            email: email,
            password: password,
        };
        const logged = await apiClient.createSession(user);

        if (logged && !logged.email && !logged.password) {
            setDisplay('flex');
            return;
        }
        try {
            await AsyncStorage.setItem(storageConstants.USER_ID, logged._id);
            return navigation.navigate('Presentation', logged);
        } catch (error) {
            console.log(error);
        }
    };

    const handleOnPressRegister = () => {
        navigation.navigate('UserRegister');
    };

    return (
        <ScrollView>
            <KeyboardAvoidingView
                contentContainerStyle={styles.container}
                behavior="position"
            >
                <Image
                    source={require('../assets/collect_login_logo.png')}
                    style={styles.logo}
                />
                <View style={styles.formContainer}>
                    <Text style={styles.formText}> Faça seu login</Text>

                    <Text style={styles.dangerText(display)}>
                        {' '}
                        Usuário ou senha inválido
                    </Text>

                    <TextInput
                        autoCapitalize="none"
                        placeholder="EMAIL"
                        keyboardType="email-address"
                        style={{ ...styles.inputContainer, marginTop: 15 }}
                        onChangeText={(value) => {
                            setDisplay('none');
                            setEmail(value);
                        }}
                        value={email}
                    />
                    <TextInput
                        autoCapitalize="none"
                        placeholder="SENHA"
                        keyboardType="default"
                        secureTextEntry={true}
                        style={styles.inputContainer}
                        onChangeText={(value) => {
                            setPassword(value);
                        }}
                        value={password}
                    />
                    <Text style={styles.textRegister}>
                        Ainda nao faz parte?
                        <Text
                            style={styles.textLink}
                            onPress={handleOnPressRegister}
                        >
                            {' '}
                            Cadastre-se
                        </Text>
                    </Text>
                </View>
                <MainButton text="ENTRAR" callback={handlePressBtn} />
            </KeyboardAvoidingView>
        </ScrollView>
    );
}
