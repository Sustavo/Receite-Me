import { useNavigation } from "@react-navigation/native";
import { Weight700 } from "../../../globalStyles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { BackArrow, BackThePage, Container, ContainerButton, LoginText } from "./styles";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/auth"
import { propsStack } from '../../routes/Models';
import { Text, TouchableOpacity } from "react-native";

interface FormData {
    email: string;
    password: string;
}

export default function Login() {
    const navigation = useNavigation<propsStack>();
    const { signIn } = useContext(AuthContext)
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleInputChange = (name: keyof FormData, value: string) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
          }));
    }

    const handleLogin = async() => {
        signIn(formData.email, formData.password)
        .then((result) => {
            if (result) {
                navigation.navigate("Tab");
                setFormData({
                    email: "",
                    password: ""
                })
            }
        })
        .catch((error) => {
            console.error('Sign-in error:', error);
        });
    };

    return(
        <Container>
            <BackThePage>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                <BackArrow source={require("../../assets/geral/arrowLeft.png")} />
                </TouchableOpacity>
                <LoginText>Login</LoginText>
                <Text>‎ ‎ ‎ ‎ ‎ </Text>
            </BackThePage>
            <Input label="Email" type="email" placeholder="joao@gmail.com" 
                value={formData.email}
                onChangeText={value => handleInputChange('email', value)} 
                required={true} />
            <Input label="Senha" type="password" placeholder="*********" 
                value={formData.password}
                onChangeText={value => handleInputChange('password', value)} 
                required={true} />
            <ContainerButton>
                <Button labelButton="ENTRAR" width={200} height={47} radius={10} onPress={handleLogin} />
            </ContainerButton>
        </Container>
    )
}