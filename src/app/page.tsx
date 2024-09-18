"use client"

import React, { useEffect, useState } from 'react';
import Header from '@/components/header/index';
import Card from '@/components/card/index';

interface CardData {
  title: string;
  year: number;
  teacher: string;
  profileAvatar: string;
  banner: string;
}

const Home: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('/api/cards'); // Faz a requisição à API para buscar os cards
        const data = await response.json();
        setCards(data); // Atualiza o estado com os dados dos cards
        setLoading(false); // Define o carregamento como falso após a requisição
      } catch (error) {
        console.error('Erro ao buscar os cards:', error);
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Exibe um indicador de carregamento enquanto os dados são buscados
  }

  return (
    <>
      <Header />
      <div style={{ display: 'flex', gap: 24, padding: 24 }}>
        {cards.map((card, index) => (
          <Card
            title={card.title}
            key={index}
            year={card.year}
            teacher={card.teacher}
            profileAvatar={card.profileAvatar}
            banner={card.banner}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
