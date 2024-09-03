import { Container, Avatar, Name, Speciality } from './styles';


export function Doctor(){

    return (
        <Container>
            <Avatar source={{uri: "https://github.com/amaralmk2.png"}} />
            <Name>
                Alexandre Amaral
            </Name>
            <Speciality>
                Development
            </Speciality>
        </Container>
    );

};