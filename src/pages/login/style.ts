import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
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
        width: '75%',
        height: Dimensions.get('window').height / 4,
        color: 'white',

    },

    senha:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: '75%',
        height: Dimensions.get('window').height / 4,
        color: 'white',
    },

    login:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: '75%',
        height: Dimensions.get('window').height / 4,
        color: 'white',
    },

    logoText:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 40,
    },

    pdt:{
        borderRadius:30,
        borderColor: 'white',
        padding: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        color: 'gray'
    },

    BL:{
        borderRadius: 30,
        backgroundColor:"gray",

        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 18,
        },
        shadowOpacity:  0.25,
        shadowRadius: 20.00,
        elevation: 24
        
    },

    text:{
        color: 'white'

    }


})