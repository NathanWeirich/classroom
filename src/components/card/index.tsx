"use client"

import React from 'react';
import Styles from "./styles"

interface ICardProps {
  title: string
  year: string
  description: string
  teacher: string
  imageUrl: string
}

const Card: React.FC<ICardProps> = ({ title,year, description,teacher,imageUrl }) => {
  return (
    <Styles.Card>
      <Styles.Header>
        <div>
          <Styles.Title>{title}</Styles.Title>
          <Styles.Year>{year}</Styles.Year>
        </div>
        <Styles.Avatar>M</Styles.Avatar>
      </Styles.Header>
      <Styles.Content>
        <p>{teacher}</p>
        <p>{description}</p>
      </Styles.Content>
      <Styles.Footer>
        <Styles.FooterIcon>📸</Styles.FooterIcon>
        <Styles.FooterIcon>📂</Styles.FooterIcon>
      </Styles.Footer>
    </Styles.Card>
  );
};

export default Card;