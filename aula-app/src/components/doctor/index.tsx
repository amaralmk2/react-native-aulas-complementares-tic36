import { Container, Avatar, Name, Speciality, DoctorProps } from './styles';


export function Doctor({type} : DoctorProps){

    return (
        <Container type={type}>
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