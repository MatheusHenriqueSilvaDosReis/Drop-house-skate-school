import react from 'react';

import {
    Text,
    View,
    Image,
    TextInput,
    Pressable,
    StyleSheet,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { styles } from './style';
import logo from '../../assets/logo.png'
import { fazerLogin } from './function';

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
                <Text style={styles.text}>email</Text>
                    
                    <View style={styles.iconstyle}>
                        <TextInput style={styles.pdt}placeholder="exemplo@dominio.com"/> <Fontisto name="email" size={24} color="white" />
                    </View>

                    
            </View>
            
            <View style={styles.senha}>
                <Text style={styles.text}>Senha</Text>

                    <View style={styles.iconstyle}>
                        <TextInput style={styles.pdt}placeholder="insira uma senha valida" secureTextEntry={true}/> <Fontisto name="eye" size={24} color="white" />
                    </View>

            </View>
            
            <View style={styles.BL}>
               <Pressable onPress={fazerLogin}>
                    <Text style={styles.BL}>Login</Text>
                </Pressable>
                
            </View>

            <view style={styles.cadastro}>
                <Text style={styles.text}>Não possui uma conta?</Text>
                <Pressable onPress={fazerLogin}>
                    <Text style={styles.BC}>CADASTRE-SE</Text>
                </Pressable>
            </view>
        
          
        </View>
  );
}

