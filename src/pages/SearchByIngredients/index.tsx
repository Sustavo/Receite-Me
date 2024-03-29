import { ButtonContainer, Container, ContainerScrollView, IngredientsContainer, TitleText } from "./styles";
import {CustomScrollView as ScrollView } from "../../../globalStyles";
import AddIngredientsButton from "../../components/AddIngredientsButton";
import AddIngredients from "../../components/AddIngredientsButton";
import SelectFilter from "../../components/SelectFilter";
import SelectedIngredient from "../../components/SelectedIngredient";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import { propsStack } from '../../routes/Models';
import { apiURL } from "../../../api";
import AsyncStorage from "@react-native-async-storage/async-storage";


interface IngredientName {
    id: number;
    ingredients: string;
}

interface Ingredient {
    calorias: number,
    carboidratos: number,
    gorduras: number,
    id: number,
    medida: string,
    nome: string,
    proteinas: number,
    quantidade: number,
    map: any
}


export default function SearchByIngredients() {
    const navigation = useNavigation<propsStack>();
    const [addIngredient, setAddIngredient] = useState(false);
    const [allIngredients, setAllIngredients] = useState<IngredientName[]>([]);
    const [ingredientsArray, setIngredientsArray] = useState<IngredientName[]>([]);

    const getIngredients = async () => {
        try {
            const token = await AsyncStorage.getItem('@token'); 
            const response = await axios.get<Ingredient>(`${apiURL}/ingredientes`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const ingredients: IngredientName[] = response.data.map(({ id, nome }: { id: number, nome: string }) => ({ id, ingredients: nome }));
            setAllIngredients(ingredients);
        } catch (error) {
            console.error('Erro ao obter ingredientes:', error);
        }
    };
    
    const handleRemoveIngredientsArray = (id: number) => {
        const FilteredIngredientsArray = ingredientsArray.filter(value => value.id !== id);
        setIngredientsArray(FilteredIngredientsArray);
    }
    
    useEffect(() => {
        getIngredients()
    }, [])

    useEffect(() => {
        setAddIngredient(false);
    },[ingredientsArray])

    return(
        <View>
            <ContainerScrollView>
                <Container>
                    <TitleText>Quais ingredientes você tem disponíveis?</TitleText>
                    <AddIngredientsButton onPress={() => setAddIngredient(!addIngredient)} />
                    <SelectFilter show={addIngredient ? 'flex' : 'none'} arrayIngredients={allIngredients} ingredientsArray={ingredientsArray} addIngredient={setIngredientsArray}/>
                    <IngredientsContainer>
                        {ingredientsArray.map(({id, ingredients}) => (
                            <SelectedIngredient key={id} label={ingredients} onPress={() => handleRemoveIngredientsArray(id)} />
                        ))}
                    </IngredientsContainer>
                    <ButtonContainer>
                        <Button labelButton="PESQUISAR  >" height={50} width={200} radius={50} onPress={() => navigation.navigate('RecipesByIngredients', {ingredients: ingredientsArray.map(item => item.ingredients)})}/>
                    </ButtonContainer>
                </Container>
            </ContainerScrollView>
        </View>
    )
}