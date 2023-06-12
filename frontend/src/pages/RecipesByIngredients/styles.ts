import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 85px;
    gap: 30px;
`

export const TextTitle = styled.Text`
    font-size: 26px;
    font-weight: 700;
    width: 272px;
    text-align: center;
    margin-bottom: 22px;
`

export const IngredientsContainer = styled.View`
    display: flex;
    flex-direction: row;
    gap: 7px;
    padding: 0 30px;
`

export const RecipeContainer = styled.View`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    margin-top: 25px;
`;