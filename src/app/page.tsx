"use client"

import React, { useEffect, useState } from 'react';
import Header from '@/components/header/index';
import Card from '@/components/card/index';
import Modal from "@/components/modal/index"

interface CardData {
  _id: string;
  title: string;
  year: number;
  teacher: string;
  profileAvatar: string;
  banner: string;
}

const Home: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false); // Controle de visibilidade do modal

  const handleOpen = () => setOpen(true); // Função para abrir o modal
  const handleClose = () => setOpen(false); // Função para fechar o modal

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('/api/cards'); // Faz a requisição à API para buscar os cards
        const data = await response.json();
        console.log(data);
        setCards(data); // Atualiza o estado com os dados dos cards
        setLoading(false); // Define o carregamento como falso após a requisição
      } catch (error) {
        console.error('Erro ao buscar os cards:', error);
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  // Função para deletar um card pelo ID
  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/cards/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Se a requisição foi bem-sucedida, atualize o estado removendo o card
        setCards((prevCards) => prevCards.filter((card) => card._id !== id));
      } else {
        console.error('Erro ao deletar o card:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao deletar o card:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>; // Exibe um indicador de carregamento enquanto os dados são buscados
  }

  return (
    <>
      <Header onAddClick={handleOpen} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, padding: 24 }}>
        {cards.map((card, index) => (
          <Card
            key={index}
            id={card._id}
            title={card.title}
            year={card.year}
            teacher={card.teacher}
            profileAvatar={card.profileAvatar}
            banner={card.banner}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <Modal open={open} handleClose={handleClose} />
    </>
  );
};

export default Home;
