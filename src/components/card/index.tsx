"use client"

import React from 'react';
import { IconButton } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import FolderIcon from '@mui/icons-material/Folder';
import{CardContainer,BannerContainer,Title,Year,Teacher,Avatar,Footer,AvatarDefault, DefaultProfileLetter,ActivityContainer}from "./styles"

interface ICardProps {
  title: string;
  year: number;
  teacher: string;
  profileAvatar: string;
  banner: string;
}

const Card: React.FC<ICardProps> = ({ title, year, teacher, profileAvatar, banner }) => {
  console.log("Props do Card:", { title, year, teacher, profileAvatar, banner });

  return (
    <CardContainer>
      <BannerContainer banner={banner}>
        <Title>{title}</Title>
        <Year>{year}</Year>
        <Teacher>{teacher}</Teacher>
        {profileAvatar
         ? <Avatar src={profileAvatar} alt={`${teacher} avatar`} />
         : <AvatarDefault>
            <DefaultProfileLetter>{teacher.charAt(0)}</DefaultProfileLetter>
         </AvatarDefault>
          }
        
      </BannerContainer>
      <ActivityContainer/>
      <Footer>
        <IconButton aria-label="photo">
          <PhotoCameraIcon />
        </IconButton>
        <IconButton aria-label="folder">
          <FolderIcon />
        </IconButton>
      </Footer>
    </CardContainer>
  );
};

export default Card;