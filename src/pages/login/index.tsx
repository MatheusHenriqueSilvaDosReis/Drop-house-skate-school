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
                    style={{ width:200, height:200}}
                    resizeMode="contain"
                />
                <Text style={styles.logoText}>SEJA BEM VINDO A NOSSA SKATE-SCHOOL</Text>
            </View>

            <View style ={styles.email}>
                <Text style={styles.text}>endereço de email</Text>
                <TextInput style={styles.pdt}placeholder="exemplo@dominio.com"/>
            </View>
            
            <View style={styles.senha}>
                <Text style={styles.text}>Senha</Text>
                <TextInput style={styles.pdt}placeholder="insira uma senha valida"/>
            </View>
            
            <View style={styles.login}>
                <button style={styles.BL} >LOGIN</button>
            </View>
        
          
        </View>
  );
}

