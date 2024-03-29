import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 85px;
    padding: 0  15px;
    width: 100%;
`

export const BackThePage = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    width: 100%;
`

export const ContainerEditProfileInputs = styled.View`
    display: flex;
    flex-direction: column; 
    width: 100%;
    align-items: center;
    gap: 17px;
    margin: 40px 0 0 0;
    
`

export const EditProfileText = styled.Text`
    font-family: 'Poppins-Bold';
    font-size: 20px;
`

export const BackArrow = styled.Image`
    width: 20px;
    height: 20px;
`

export const OverlayTitle = styled.Text `
    font-family: 'Poppins-Bold';
    font-size: 16px;
    text-align: center;
    padding: 30px 0 0 0;
`

export const OverlayText = styled.Text `
    font-family: 'Poppins-Medium';
    font-size: 14px;
    text-align: center;
    padding: 20px 30px 20px 30px;
`

export const OverlayContainerButton = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  margin-left: 30px;
  margin-right: 30px;
`

export const InputContainer = styled.View`
    flex-direction: column;
    gap: 15px;
    margin-bottom: 40px;
`

export const ContainerChangePassword = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-bottom: 31px;
    margin-top: 20px;
`

export const PadlockImage = styled.Image`
    width: 22px;
    height: 22px;
`

export const PadlockText = styled.Text `
font-family: 'Poppins-Medium';
    font-size: 12px;
    margin-top: 4px;
    text-align: center;
    color: #22A36D;
    /* padding: 20px 30px 20px 30px; */
`