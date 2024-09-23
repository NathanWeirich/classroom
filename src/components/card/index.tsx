'use client'

import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import {
  CardContainer,
  BannerContainer,
  Title,
  Year,
  Teacher,
  Avatar,
  Footer,
  AvatarDefault,
  DefaultProfileLetter,
  ActivityContainer,
} from './styles';

interface ICardProps {
  id: string;
  title: string;
  year: number;
  teacher: string;
  profileAvatar: string;
  banner: string;
  onDelete: (id: string) => void; 
}

const Card: React.FC<ICardProps> = ({
  id,
  title,
  year,
  teacher,
  profileAvatar,
  banner,
  onDelete,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    onDelete(id); // Passa o ID para a função de deletar
    handleMenuClose(); // Fecha o menu após clicar em "Deletar"
  };

  return (
    <CardContainer>
      <BannerContainer banner={banner}>
        <Title>{title}</Title>
        <Year>{year}</Year>
        <Teacher>{teacher.toUpperCase()}</Teacher>
        {profileAvatar ? (
          <Avatar src={profileAvatar} alt={`${teacher} avatar`} />
        ) : (
          <AvatarDefault>
            <DefaultProfileLetter>{teacher.charAt(0).toUpperCase()}</DefaultProfileLetter>
          </AvatarDefault>
        )}
        <IconButton
          aria-label="more"
          aria-controls="card-menu"
          aria-haspopup="true"
          onClick={handleMenuOpen}
          style={{ position: 'absolute', top: 8, right: 8, color: "white" }}
        >
          <MoreVertIcon />
        </IconButton>
        {/* Menu com as opções Editar e Deletar */}
        <Menu
          id="card-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Editar</MenuItem>
          <MenuItem onClick={handleDelete}>Deletar</MenuItem> {/* Chama handleDelete */}
        </Menu>
      </BannerContainer>
      <ActivityContainer />
      <Footer>
        <IconButton aria-label="photo">
          <AssignmentIndOutlinedIcon style={{ color: 'black' }} />
        </IconButton>
        <IconButton aria-label="folder">
          <FolderOpenOutlinedIcon style={{ color: 'black' }} />
        </IconButton>
      </Footer>
    </CardContainer>
  );
};

export default Card;