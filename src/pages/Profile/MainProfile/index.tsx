import { View, Text } from "react-native";
import {CustomScrollView as ScrollView } from "../../../../globalStyles";
import { ButtonContainer, Container, UserContainer, UserFunctionsIconContainer, UserFunctionsList, UserFunctionsText, UserIcon, UserLogo, UserName, UserStatus } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/auth";
import { Ionicons } from '@expo/vector-icons';
import { Button, Overlay } from '@rneui/themed';

import { propsStack } from '../../../routes/Models';
import axios from "axios";
import { apiURL } from "../../../../api";

interface ProfileProps {
  id: number,
  text: string,
  icon: any,
  command: any
}

export default function MainProfile() {
    const navigation = useNavigation<propsStack>();
    const { data, clearFormData } = useContext(AuthContext)

    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => {
      setVisible(!visible);
    }

    const profiles: ProfileProps[] = [
      { 
        id: 1,
        text: "Editar perfil", 
        icon: "md-pencil-sharp",
        command: () => navigation.navigate("EditProfile") 

      },
      { 
        id: 2,
        text: "Favoritos", 
        icon: "heart-outline",
        command: () => navigation.navigate("Favorites") 

      },
      { 
        id: 3,
        text: "Recentemente visualizadas", 
        icon: "ios-newspaper-outline",
        command: () => navigation.navigate("RecentlyViewed") 

      },
      { 
        id: 4,
        text: "Logout", 
        icon: "log-out-outline",
        command: () => handleLogout()

      },
      { 
        id: 5,
        text: "Excluir conta", 
        icon: "ios-trash-outline",
        command: toggleOverlay

      },
    ];
    
    const handleLogout = () => {
      clearFormData();
      navigation.navigate("Login");
    }

    const handleDeleteUser = async (id: number) => {
      try {
        const response = await axios.delete(`${apiURL}/usuarios/${id}`);
        navigation.navigate("SignUp");
      } catch (error) {
        console.error(error);
      }
    };

    return(
      <View>
        <ScrollView>
            <Container>
                <UserContainer>
                    <UserLogo source={require('../../../assets/Users/Janet.png')} />
                    <UserName>
                      {data.nome && data.nome.split(' ')[0]}
                      {data.nome && data.nome.split(' ')[1] && " " + data.nome.split(' ')[1]}
                    </UserName>
                    <UserStatus>{data.bio}</UserStatus>
                </UserContainer>
                <UserFunctionsList>
                    {profiles.map(({id, icon, text, command}) => (
                        <UserFunctionsIconContainer onPress={command} key={id}>
                            <Ionicons name={icon} size={22} color="black" />
                            <UserFunctionsText>{text}</UserFunctionsText>
                        </UserFunctionsIconContainer>
                    ))}
                </UserFunctionsList>
            </Container>
            <Overlay 
              isVisible={visible}
              onBackdropPress={toggleOverlay}
              overlayStyle={{backgroundColor: "#FFFFFF", width: 301, height: 178, borderRadius: 20}}>
              <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14, color:'#000000', textAlign:'center', paddingTop: 20, paddingRight: 38, paddingBottom: 35, paddingLeft: 38}}>Você deseja mesmo excluir sua conta?</Text>
              <ButtonContainer>
                <Button 
                  title="Cancelar" 
                  buttonStyle={{
                    backgroundColor: '#A9A9A9',
                    borderRadius: 5
                  }}
                  titleStyle={{fontFamily: 'Poppins-Medium', fontSize: 14, color:'#FFFFFF' }}
                  containerStyle={{
                    height: 40,
                    width: 110
                  }}
                  onPress={toggleOverlay}
                />
                <Button 
                  title="Excluir" 
                  buttonStyle={{
                    backgroundColor: '#da2d2d',
                    borderRadius: 5
                  }}
                  titleStyle={{fontFamily: 'Poppins-Medium', fontSize: 14, color:'#FFFFFF' }}
                  containerStyle={{
                    height: 40,
                    width: 110
                  }}
                  onPress={() => handleDeleteUser(data.id)}
                />
              </ButtonContainer>
            </Overlay>
        </ScrollView>
      </View>
    )
}