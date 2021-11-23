import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './footer-menu.styles';

const props = {
    listItenCallback: Function,
    plusIconCallBack: Function,
    profileCallback: Function,
};

export default function FooterMenu(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    props.listItenCallback();
                }}
            >
                <Image source={require('../../../assets/list-icon.png')} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    props.plusIconCallBack();
                }}
            >
                <Image source={require('../../../assets/plus_icon.png')} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    props.profileCallback();
                }}
            >
                <Image source={require('../../../assets/profile.png')} />
            </TouchableOpacity>
        </View>
    );
}
