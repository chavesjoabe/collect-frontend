import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Text,
    TextInput,
    View,
} from 'react-native';
import apiClient from '../api/api.client';
import MainButton from '../shared/components/main-button';
import { styles } from './styles';

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
