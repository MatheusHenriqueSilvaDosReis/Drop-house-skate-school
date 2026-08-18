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
        width: '10%',
        height: Dimensions.get('window').height / 3,
    },

    email:{
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '75%',
        height: Dimensions.get('window').height / 4,
        color: 'white',
        fontSize: 20,
        textAlign: 'center'

    },

    senha:{
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '75%',
        height: Dimensions.get('window').height / 4,
        color: 'white',
        textAlign: 'center'
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
        alignItems: 'center',
        justifyContent: 'center',
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
        height: 30,
        width: 60,
        textAlign: 'center',

        shadowColor: "gray",
        shadowOffset: {
        width: 0,
        height: 18,
        },
        shadowOpacity:  0.25,
        shadowRadius: 20.00,
        elevation: 30
        
    },

    text:{
        color: 'white'

    },

    cadastro:{
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    },

    BC:{
        borderRadius: 30,
        color:"red"
    },

    iconstyle:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        width: '100%',
            
        },
});
