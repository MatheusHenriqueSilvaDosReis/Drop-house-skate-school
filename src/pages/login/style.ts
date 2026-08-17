import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },

    logo:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: '100%',
        height: Dimensions.get('window').height / 3,
    },

    email:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: '100%',
        height: Dimensions.get('window').height / 4,
        backgroundColor: 'red',

    },

    senha:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: '100%',
        height: Dimensions.get('window').height / 4,
        backgroundColor: 'blue',
    },

    login:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: '100%',
        height: Dimensions.get('window').height / 4,
        backgroundColor: 'green',
    },

    logoText:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 40,
    },
})