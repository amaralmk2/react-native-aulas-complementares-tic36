import styled from 'styled-components/native';


export const Container = styled.View`
            
            top: 350px;
            left: 100px;
            align-items: center;
            justify-content: center;
            width: 200px;
            padding: 22px;
            border-radius: 7px;
            
            background: ${({theme}) => theme.COLORS.INFO};
            
        
`;

export const Avatar = styled.Image`

    height: 80px;
    width: 80px;
    border-radius: 40px;
    
`;

export const Name = styled.Text`

margin-top: 7px;
font-size: 22px;
color: ${({theme}) => theme.COLORS.PRIMARY_800};

`;

export const Speciality = styled.Text`

font-size: 19px;
color: ${({theme}) => theme.COLORS.PRIMARY_700};


`;