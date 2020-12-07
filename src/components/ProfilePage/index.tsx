import React from 'react';
import Feed from '../Feed';
import { Container, Banner, Avatar, ProfileData, Edit, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Eduardo Ezequiel</h1>
        <h2>@eduardo_ezequielOFC</h2>

        <p>Software Developer</p>

        <ul>
          <li>
            <LocationIcon />
            Minas Gerais, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 26 de Abril de 1996
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>500</strong>
          </span>
          <span>
            <strong>300 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>


      <Feed />
    </Container>
  );
}

export default ProfilePage;