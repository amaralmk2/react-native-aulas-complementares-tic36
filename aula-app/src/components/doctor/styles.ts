import styled from 'styled-components/native';


export type DoctorProps = {
    type: 'primary' | 'secondary';
}


export const Container = styled.TouchableOpacity`
            
            top: 350px;
            left: 100px;
            align-items: center;
            justify-content: center;
            width: 200px;
            padding: 22px;
            border-radius: 7px;
            
            background: ${({type}) => type === 'primary' ? 'red' : 'green'};
            
        
`<DoctorProps>;

export const Avatar = styled.Image`

    height: 80px;
    width: 80px;
    border-radius: 40px;
    
`;

export const Name = styled.Text`

margin-top: 7px;
font-size: 19px;
color: ${({theme}) => theme.COLORS.PRIMARY_900};

`;

export const Speciality = styled.Text`

font-size: 17px;
color: ${({theme}) => theme.COLORS.PRIMARY_700};


`;