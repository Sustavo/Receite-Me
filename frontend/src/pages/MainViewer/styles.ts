import styled from 'styled-components/native';

//View 
export const Container = styled.View`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 64px;
    margin-bottom: 90px;
    padding: 0 30px;
    height: 100%;
`

export const UserContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const GreetingUserContainer = styled.View`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const  TextContainer = styled.View`
    display:flex;
    gap: 15px;
`

export const ScrollContainer = styled.View`
    height: 167px;
    display: flex;
    flex-direction: row;
    gap: 15px;
`

export const ScrollCategoryContainer = styled.View`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

export const BottomBarContainer = styled.View`
    position: absolute;
    z-index: 999;
    bottom: 0;
`


// Text
export const GreetingText = styled.Text`
    fontFamily: 'Poppins-SemiBold';
    font-size: 14px;
    color: #a9a9a9;

`

export const TitleText = styled.Text `
    fontFamily: 'Poppins-Bold';
    font-size: 20px;
    width: 230px;
`


// Image
export const UserLogo = styled.Image `
    width: 50px;
    height: 50px;
`