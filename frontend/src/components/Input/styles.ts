import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 40px;
    gap: 3px;
`

export const InputText = styled.TextInput`
    width: 100%;
    height: 48px;
    padding: 0 15px;

    border: 1px solid #B5B5B5;
    border-radius: 7px;

    color: #B5B5B5;
`

export const TextMain = styled.Text`
    font-size: 12px;
    font-weight: 500;
    color: #686868;
`