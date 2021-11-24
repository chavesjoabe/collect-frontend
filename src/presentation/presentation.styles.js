import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
    },
    contentContainer: {
        alignItems: 'center',
        flexGrow: 1
    },
    logo: {
        height: '40%',
        resizeMode: 'contain',
        marginTop: '15%',
    },
    divider: {
        color: '#c4c4c4',
        marginTop: '10%',
        marginBottom: '10%',
    },
    headerText: {
        color: '#0F6D84',
        fontSize: 18,
        marginBottom: '10%',
        marginTop: '15%',
    },
    descriptionText: {
        width: '80%',
        fontWeight: '300',
        fontSize: 16,
        marginBottom: '15%',
        color: '#0F6D84',
        flexGrow: 1
    },
});
