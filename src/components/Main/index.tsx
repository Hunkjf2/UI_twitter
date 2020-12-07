import React from 'react';

import ProfilePage from '../ProfilePage';


import { Container, Headers, BackIcon, ProfileInfo, BottomMenu, HomeIcon, SearchIcon, EmailIcon, BellIcon } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Headers>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
            <strong>Eduardo Ezequiel</strong>
            <span>200 Tweets</span>
        </ProfileInfo>
      </Headers>

      <ProfilePage />

      <BottomMenu>
        <HomeIcon className="active"/>
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
}

export default Main;