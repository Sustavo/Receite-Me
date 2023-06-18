import { Container, GreetingText, GreetingUserContainer, ScrollCategoryContainer, ScrollContainer, TextContainer, TitleText, UserContainer, UserLogo } from "./styles";
import {CustomScrollView as ScrollView } from "../../../globalStyles";
import Search from "../../components/Search";
import CategoryButton from "../../components/CategoryButton";
import RecipeButton from "../../components/RecipeButton";
import BottomBar from "../../components/BottomBar";
import { useNavigation } from "@react-navigation/native";


const categories = [
    { name: 'Veggie', 
      image: require('../../assets/categories/Broccoli.png')},
    { name: 'Doces', 
      image: require('../../assets/categories/Shortcake.png')},
    { name: 'Fast Food', 
      image: require('../../assets/categories/Hamburger.png')},
    { name: 'Drinks', 
      image: require('../../assets/cat-logo.png')},
    { name: 'Mexicano', 
      image: require('../../assets/categories/Taco.png')}
  ];
  
  const recipes = [
    { id: 1, name: 'Ramen Coreano', time: '10-15 min', image: require('../../assets/recipes/Ramen.png') },
    { id: 2, name: 'Feijoada', time: '10-15 min', image: require('../../assets/recipes/Feijoada.png') },
    { id: 3, name: 'Filé Mignon', time: '10-15 min', image: require('../../assets/cat-logo.png') },
    { id: 4, name: 'Hamburguer', time: '10-15 min', image: require('../../assets/recipes/Hamburguer.png') },
    { id: 5, name: 'Cachorro Quente', time: '10-15 min', image: require('../../assets/recipes/HotDog.png') },
    { id: 6, name: 'Coxinha', time: '10-15 min', image: require('../../assets/recipes/Coxinha.png') },
    { id: 7, name: 'Spaghetti', time: '10-15 min', image: require('../../assets/recipes/Spaghetti.png') },
    { id: 8, name: 'Sushi', time: '10-15 min', image: require('../../assets/recipes/Sushi.png') },
    { id: 9, name: 'Yakissoba', time: '10-15 min', image: require('../../assets/recipes/Yakissoba.png') },
  ];

export default function MainViewer() {
    const navigation = useNavigation();
    return(
        <ScrollView>
            <Container>
                <UserContainer>
                    <GreetingUserContainer>
                        <GreetingText>Olá, Rossana</GreetingText>
                        <TitleText>Vamos Cozinhar uma boa receita hoje!</TitleText>
                    </GreetingUserContainer>
                    <UserLogo source={require('../../assets/Users/Janet.png')} />
                </UserContainer>
                <Search placeholder="Pesquise por receitas" />
                <TextContainer>
                    <TitleText>Categorias</TitleText>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <ScrollCategoryContainer>
                            {categories.map(({ name, image }, index) => (
                                <CategoryButton key={index} label={name} Icon={image} onPress={() => console.log('test')} />
                            ))}
                        </ScrollCategoryContainer>
                    </ScrollView>
                </TextContainer>
                <TextContainer>
                    <TitleText>Recomendações</TitleText>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <ScrollContainer>
                            {recipes.map(({ id ,name, time, image}) => (
                                <RecipeButton key={id} label={name} icon={image} time={time} onPress={() => navigation.navigate("recipeInformations", {id: id})} />
                            ))}
                        </ScrollContainer>
                    </ScrollView>
                </TextContainer>
                <TextContainer>
                    <TitleText>Receitas recentes</TitleText>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <ScrollContainer>
                            {recipes.map(({ id ,name, time, image}) => (
                                <RecipeButton key={id} label={name} icon={image} time={time} onPress={() => navigation.navigate("recipeInformations", {id: id})} />
                            ))}
                        </ScrollContainer>
                    </ScrollView>
                </TextContainer>
                <TextContainer>
                    <TitleText>Receitas da semana</TitleText>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <ScrollContainer>
                            {recipes.map(({ id ,name, time, image}) => (
                                <RecipeButton key={id} label={name} icon={image} time={time} onPress={() => navigation.navigate("recipeInformations", {id: id})} />
                            ))}
                        </ScrollContainer>
                    </ScrollView>
                </TextContainer>
            </Container>
            <BottomBar />
        </ScrollView>
    )
}