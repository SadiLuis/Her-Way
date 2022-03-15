import { View, Text, Image, TextInput, Button } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import { signIn, signUp } from '../Firebase';
import React, { useState } from 'react'

const RegConductora = () => {
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [modo , setModo] = useState('Entrar');


    async function handlePress() {
        if (mode === "Entrar") {
          await signUp(email, password);
        }
        if (mode === "Registrarse") {
          await signIn(email, password);
        }
      }

  return (
    <View>
      <Text>Bienvenida Conductora</Text>
        <View>
        <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
        />
        </View>

        <View>
        <TextInput
            placeholder="Contraseña"
            value={contraseña}
            onChangeText={setContraseña}
            secureTextEntry={true}
        />
        </View>


        <View>
            <Button
                title={modo === "Entrar" ? "Registrarse" : "Entrar"}
                onPress={handlePress}
                disabled={!email || !password}
            />
        </View>

        <view>
            <TouchableOpacity 
            onPress={() => setModo(modo === "Entrar" ? "Registrarse" : "Entrar")}>
                <Text>
                    {modo === "Entrar" ? "¿No tienes cuenta? Registrate" : "¿Ya tienes cuenta? Entra"}
                    </Text>
            </TouchableOpacity>
        </view>
       
    </View>
  )
}

export default RegConductora