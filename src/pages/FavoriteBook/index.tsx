import { TouchableOpacity, View } from "react-native";
import {CustomScrollView as ScrollView } from "../../../globalStyles";
import { BottomSideRightImage, ButtonContainer, Container, ContainerFavoriteBook, ContainerImages, InputContainer, LeftContainerImages, LeftImage, MainTitle, RightContainerImages, ScrollViewContainer, SeeMore, TitleContainer, TitleFavoriteBook, TitlePopUp, TopSideRightImage } from "./styles";
import { propsStack } from '../../routes/Models';
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { Button as BTOverlay, Overlay } from "@rneui/base";
import Input from "../../components/Input";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { AuthContext } from "../../context/auth";
import { apiURL } from "../../../api";

export default function FavoriteBook() {
    const navigation = useNavigation<propsStack>();
    const { data } = useContext(AuthContext)
    const [visibleOverlay, setVisibleOverlay] = useState(false);
    const [newFolder, setNewFolder] = useState('');

    const handleCreateFolder = async() => {
        const token = await AsyncStorage.getItem('@token'); 
        try {
            await axios.post(`${apiURL}/pastas/create/${data.id}`, {
                nome: newFolder
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setVisibleOverlay(false);
        } catch(error) {
            console.error("Error de requisição: ", error);
            throw error;
        }
    }

    useEffect(() => {
        console.log(newFolder)
    }, [newFolder])

    return(
        <View>
            <View>
            <Overlay 
            isVisible={visibleOverlay}
            overlayStyle={{backgroundColor: "#FFFFFF", width: 301, height: 237, borderRadius: 20}}>
                <TitlePopUp>Criar pasta</TitlePopUp>
                <InputContainer>
                    <Input type={"text"} placeholder={"Nome da pasta"} value={newFolder} onChangeText={(value: string) => setNewFolder(value)} />
                </InputContainer>
                <ButtonContainer>
                    <BTOverlay 
                    title="Cancelar" 
                    buttonStyle={{ backgroundColor: 'transparent', borderRadius: 10 }}
                    titleStyle={{fontFamily: 'Poppins-Medium', fontSize: 14, color:'#da2d2d' }}
                    containerStyle={{
                        height: 40,
                        width: 110
                    }}
                    onPress={() => setVisibleOverlay(false)}
                    />
                    <BTOverlay 
                    title="Salvar" 
                    buttonStyle={{
                        backgroundColor: '#22A36D', borderRadius: 5
                    }}
                    titleStyle={{fontFamily: 'Poppins-Medium', fontSize: 14, color:'#FFFFFF' }}
                    containerStyle={{
                        height: 40,
                        width: 110
                    }}
                    onPress={() => handleCreateFolder()}
                    />
                </ButtonContainer>
                </Overlay>
            </View>
            <ScrollViewContainer>
                <Container>
                    <MainTitle>Favoritos</MainTitle>
                    <ContainerFavoriteBook>
                        <TitleContainer>
                            <TitleFavoriteBook>Favoritos</TitleFavoriteBook>
                            <TouchableOpacity onPress={() => navigation.navigate("FavoriteRecipes")}>
                                <SeeMore>Ver mais</SeeMore>
                            </TouchableOpacity>
                        </TitleContainer>
                        <ContainerImages>
                            <LeftContainerImages>
                                <LeftImage source={require("../../assets/recipes/spaghetti.jpg")} />
                            </LeftContainerImages>
                            <RightContainerImages>
                                <TopSideRightImage source={require("../../assets/recipes/yakisoba.jpeg")} />
                                <BottomSideRightImage source={require("../../assets/recipes/mistoquente.jpeg")} />
                            </RightContainerImages>
                        </ContainerImages>
                    </ContainerFavoriteBook>
                    <ContainerFavoriteBook>
                        <TitleContainer>
                            <TitleFavoriteBook>Nova Pasta</TitleFavoriteBook>
                            <TouchableOpacity  onPress={() => setVisibleOverlay(true)}>
                                <SeeMore style={{color: 'gray'}}>Criar pasta</SeeMore>
                            </TouchableOpacity>
                            
                        </TitleContainer>
                        <ContainerImages>
                            <LeftContainerImages>
                                <LeftImage />
                            </LeftContainerImages>
                            <RightContainerImages>
                                <TopSideRightImage />
                                <BottomSideRightImage />
                            </RightContainerImages>
                        </ContainerImages>
                    </ContainerFavoriteBook>
                </Container>
            </ScrollViewContainer>
        </View>
    )
}