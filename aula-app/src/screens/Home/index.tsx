import { View, Text } from 'react-native'
import { styled } from './style'

export function Home(){

    return(
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',

        }}><Text style={{
            fontSize: 48
        }}>Olá</Text></View>
    );
}   