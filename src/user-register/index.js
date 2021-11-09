import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Alert,
    StyleSheet,
    KeyboardAvoidingView,
    TextInput,
    View,
    Text,
} from 'react-native';
import apiClient from '../api/api.client';
import MainButton from '../shared/components/main-button';

export default function UserRegister() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmation, setConfirmation] = useState('');

    const navigation = useNavigation();

    const handlePressBtn = async () => {
        const user = {
            name,
            email,
            password,
        };
        if (confirmation !== password) {
            Alert.alert('As duas senhas devem ser iguais');
        }

        const registered = await apiClient.createNewUser(user);

        if (registered) {
            Alert.alert('Cadastrado');
            navigation.navigate('Login');
        }
    };

    return (
        <KeyboardAvoidingView
            contentContainerStyle={styles.container}
            behavior="position"
        >
            <View style={styles.formContainer}>
                <Text style={styles.formText}>INFORME SEUS DADOS</Text>
                <TextInput
                    autoCapitalize="none"
                    placeholder="NOME"
                    keyboardType="default"
                    style={styles.inputContainer}
                    onChangeText={(value) => {
                        setName(value);
                    }}
                    value={name}
                />
                <TextInput
                    autoCapitalize="none"
                    placeholder="EMAIL"
                    keyboardType="email-address"
                    style={styles.inputContainer}
                    onChangeText={(value) => {
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
                <TextInput
                    autoCapitalize="none"
                    placeholder="CONFIRME SUA SENHA"
                    keyboardType="default"
                    secureTextEntry={true}
                    style={styles.inputContainer}
                    onChangeText={(value) => {
                        setConfirmation(value);
                    }}
                    value={confirmation}
                />
            </View>
            <MainButton text="CADASTRAR" callback={handlePressBtn} />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
    },
    formContainer: {
        width: '90%',
        marginTop: '10%',
        marginBottom: '10%',
    },
    formText: {
        marginTop: '20%',
        fontSize: 20,
        fontWeight: '500',
        color: '#2973E2',
    },
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
