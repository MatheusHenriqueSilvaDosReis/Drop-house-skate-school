import react from 'react';

import {
    Text,
    View,
    Image,
    TextInput,
    
} from 'react-native';

import { styles } from './style';
import logo from '../../assets/logo.png'

export default function Login() {
  return (
        <View style={styles.container}>

            <View style={styles.logo}>
                <Image
                    source={logo}
                    style={{ width:100, height:90}}
                    resizeMode="contain"
                />
                <Text style={styles.logoText}>SEJA BEM VINDO A NOSSA SKATE-SCHOOL</Text>
            </View>

            <View style ={styles.email}>
                <Text>endereço de email</Text>
                <TextInput placeholder="exemplo@dominio.com"/>
            </View>
            
            <View style={styles.senha}>
                <Text>Senha</Text>
            </View>
            
            <View style={styles.login}>
                <Text>botao</Text>
            </View>
        
      
        </View>
  );
}

