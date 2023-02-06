import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';


import firebase from '../../services/firebaseConnections';

export default function Login({changeStatus}) {
    const[type, setType] = useState('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(){
        if(type === 'login'){
          //aqui fazemos o login
          const user = firebase.auth().signInWithEmailAndPassword(email, password)
          .then((user) => {
            changeStatus(user.user.uid)
          })
          .catch((err)=>{
            console.log(err);
            alert('Ops parece que deu algum erro');
            return;
          })
        }else{
          //aqui cadastramos o usuario
          const user = firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((user)=>{
            changeStatus(user.user.uid)
          })
          .catch((err)=>{
            console.log(err);
            alert('ops parece que algo está errado!')
            return;
          })
        }
    }

  
  return (
    <View style={styles.container}>
      <TextInput
      placeholder="Seu email"
      style={styles.input}
      onChangeText={(text)=> setEmail(text)}
      value={email}
      
      />
    
      <TextInput
      placeholder="****"
      style={styles.input}
      onChangeText={(text)=> setPassword(text)}
      value={password}
      
      />
      <TouchableOpacity
      style={[styles.handleLogin, {backgroundColor: type === 'login' ? '#3ea6f2': '#141414'}]}
      onPress={handleLogin}
      >
        <Text style={styles.loginText}>
            { type === 'login' ? 'Acessar' : 'Cadastrar'}
            </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={ ()=> setType(type => type === 'login' ? 'cadastrar': 'login')}>
        <Text style={{ textAlign:'center' }}>
            {type=== 'login' ? 'Criar uma conta': 'Já possuo uma conta'}
            </Text>
      </TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
    backgroundColor: '#f2f6fc',
    paddingLeft:10,
    paddingRight:10

    //alignItems: 'center',
    //justifyContent: 'center',
  },
  input:{
    marginBottom:10,
    backgroundColor:'#fff',
    borderRadius :4,
    height:45,
    padding:10,
    borderWidth:1,
    borderColor: '#141414'
  },
  handleLogin:{
    alignItems:'center',
    justifyContent:'center',
    //backgroundColor:'#141414',
    height:45,
    marginBottom:10,
    borderRadius :4
  },
  loginText:{
    color:'#fff',
    fontSize:17,
    borderRadius:4
  }

});
