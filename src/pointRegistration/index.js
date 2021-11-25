import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    ScrollView,
    Text,
    TextInput,
    View,
} from 'react-native';
import apiClient from '../api/api.client';
import MainButton from '../shared/components/main-button';
import { styles } from './pointRegistration.styles';
import { Modal, Portal, Button, Provider } from 'react-native-paper';

export default function PointRegistration({ route }) {
    const [pointName, setPointName] = useState('');
    const [pointDescription, setPointDescription] = useState('');
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const navigation = useNavigation();
    const [error, setError] = useState(false);

    const handleOnPressRegisterButton = async () => {
        if (!pointName || !pointDescription) {
            setError(true)
            return
        }
        const collectPoint = {
            name: pointName,
            description: pointDescription,
            user: route.params.userId,
            ...route.params.coordinates,
        };

        try {
            const registeredPoint = await apiClient.createCollectPoint(
                collectPoint
            );
            showModal();
        } catch (error) {
            console.log(error);
        }
    };

    const handleOnPressOk = async () => {
        if (route.params?.updatePoints) await route.params.updatePoints()
        return navigation.navigate('MapMain');
    };

    return (
        <>
            <ScrollView>
                <KeyboardAvoidingView
                    contentContainerStyle={styles.container}
                    behavior="position"
                >
                    <Image
                        source={require('../assets/collect_registration_img.png')}
                        style={styles.logo}
                    />
                    <View style={styles.formContainer}>
                        <Text style={styles.formText}>
                            {' '}
                            Dados do ponto de coleta
                        </Text>

                        <TextInput
                            autoCapitalize="sentences"
                            placeholder="NOME DO PONTO DE COLETA"
                            keyboardType="default"
                            style={{ ...styles.inputContainer, marginTop: 15 }}
                            onChangeText={(value) => {
                                setPointName(value);
                            }}
                            value={pointName}
                        />
                        <TextInput
                            autoCapitalize="sentences"
                            placeholder="DESCRIÇÃO"
                            keyboardType="default"
                            style={styles.inputContainer}
                            onChangeText={(value) => {
                                setPointDescription(value);
                            }}
                            value={pointDescription}
                        />
                    </View>
                    <MainButton
                        text="CADASTRAR"
                        callback={handleOnPressRegisterButton}
                    />
                </KeyboardAvoidingView>
            </ScrollView>
            <Provider>
                <Portal style={{ height: '100%' }}>
                    <Modal
                        visible={error}
                        contentContainerStyle={styles.modal}
                        dismissable={false}
                    >
                        <Image
                            source={require('../assets/warning-check.png')}
                            width={139}
                            height={139}
                        />
                        <Text style={styles.modalMainText}>
                            Você deve preencher
                            {'\n'}
                            todos os campos
                        </Text>
                        <Text
                            style={styles.modalLinkText}
                            onPress={() => setError(false)}
                        >
                            OK
                        </Text>
                    </Modal>
                </Portal>
            </Provider>
            <Provider>
                <Portal style={{ height: '100%' }}>
                    <Modal
                        visible={visible}
                        contentContainerStyle={styles.modal}
                        dismissable={false}
                    >
                        <Image
                            source={require('../assets/confirmation-check.png')}
                        />
                        <Text style={styles.modalMainText}>
                            Parabéns!
                            {'\n'}
                            Seu ponto de coleta
                            {'\n'}
                            {pointName}
                            {'\n'}
                            Foi cadastrado com sucesso!
                        </Text>
                        <Text
                            style={styles.modalLinkText}
                            onPress={handleOnPressOk}
                        >
                            OK
                        </Text>
                    </Modal>
                </Portal>
            </Provider>
        </>
    );
}
