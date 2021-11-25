import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import colorConstants from '../../constants/color.constants';
import { styles } from './mainButton.styles';

const props = {
    text: String,
    callback: Function,
};

export default function MainButton(props) {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <TouchableHighlight
            onPress={() => {
                props.callback();
            }}
            underlayColor="#7BA9EE"
            style={{
                ...styles.btnNormal,
                ...props?.style ?? {}
            }}
        >
            <Text style={styles.btnText}> {props.text} </Text>
        </TouchableHighlight>
    );
}
