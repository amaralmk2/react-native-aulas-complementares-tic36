//import {StyleSheet } from 'react-native';
import styled from 'styled-components/native';


export const Container = styled.View`
            flex: 1;
            align-items: center;
            justify-content: center;

            background: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Text = styled.Text`
            font-size: 48px;
            color: ${({theme}) => theme.COLORS.INFO};
`;

/*export const styled = StyleSheet.create({
    container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
    },
    text: {

        fontSize: 48

    }
})*/