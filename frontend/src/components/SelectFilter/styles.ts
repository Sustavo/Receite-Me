import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const SelectButtonScope = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 80px;
    background: #F8F8F8;
    padding: 24px;
    border-top-left-radius: 25px ;
    border-bottom-left-radius: ${(props: { styleIsFocused: boolean; }) => (props.styleIsFocused ? '0' : '25px')};
    border-top-right-radius: 25px;
    border-bottom-right-radius: ${(props: { styleIsFocused: boolean; }) => (props.styleIsFocused ? '0' : '25px')};
    width: 100%;
`

export const SelectButtonImage = styled.Image`
    width: 16px;
    height: 26px;
`

export const SelectButtonTextInput = styled.TextInput`
    font-size: 14px;
    font-weight: 500;
    color: #a9a9a9;
    flex-grow: 1;
`

export const SelectButtonFlatList = styled.FlatList`
    background: #F8F8F8;
    width: 100%;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
`

export const SelectButttonFlatListText = styled.Text`
    display: flex;
    align-self: center;
    color: #A9A9A9; 
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 38px;
`

export const SelectButtonTouchableOpacity = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    width: 50px;
`

export const TouchableWithoutFeedbackFlatList = styled.TouchableWithoutFeedback`
    display:flex;
    align-self: center;
    width: 50%;
`