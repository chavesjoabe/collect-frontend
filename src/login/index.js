import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    View,
    ScrollView,
    Alert,
    KeyboardAvoidingView,
} from 'react-native';
import apiClient from '../api/api.client';
import MainButton from '../shared/components/main-button';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
        console.log(logged);
        return navigation.navigate('Presentation', logged);
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

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
    },
    logo: {
        marginTop: '15%',
    },
    formContainer: {
        width: '90%',
        marginTop: '10%',
        marginBottom: '10%',
    },
    formText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#0C7C68',
    },
    dangerText: (state = 'none') => ({
        fontSize: 15,
        fontWeight: '500',
        color: 'red',
        marginTop: 10,
        display: state,
    }),
    inputContainer: {
        width: '100%',
        height: 75,
        borderColor: '#c4c4c4',
        borderRadius: 10,
        borderWidth: 1,
        padding: 15,
        fontSize: 18,
        marginTop: '10%',
    },
    textRegister: {
        fontSize: 15,
        marginTop: '10%',
    },
    textLink: {
        fontSize: 15,
        color: '#2973E2',
        fontWeight: '700',
    },
});
