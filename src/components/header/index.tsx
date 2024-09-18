"use client"

import React from 'react';
import Image from 'next/image';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import AppsIcon from '@mui/icons-material/Apps';
import { 
  HeaderContainer, 
  MenuButton, 
  LogoContainer, 
  LogoText, 
  IconContainer, 
  UserProfile 
} from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <MenuButton>
          <IconButton aria-label="menu">
            <MenuIcon />
          </IconButton>
        </MenuButton>
        <Image src="/classroom-logo.svg" alt="Google Sala de Aula" width={32} height={32} />
        <LogoText>Google Sala de Aula</LogoText>
      </LogoContainer>

      <IconContainer>
        <IconButton aria-label="add">
          <AddIcon />
        </IconButton>
        <IconButton aria-label="apps">
          <AppsIcon />
        </IconButton>
        <UserProfile src="/vasco.png" alt="User Profile" />
      </IconContainer>
    </HeaderContainer>
  );
};

export default Header;