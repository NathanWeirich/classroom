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
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true); 
  const handleClose = () => setOpen(false); 

  useEffect(() => {
    const fetchCards = async () => {
      try {
        
        const response = await fetch('/api/cards'); 
        const data = await response.json();
        setCards(data); 
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar os cards:', error);
        setLoading(false);
      }
    };

    setInterval(()=>{
      fetchCards();
    },500)
    
    
  }, []);

  
  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/cards/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setCards((prevCards) => prevCards.filter((card) => card._id !== id));
      }
    } catch (error) {
      console.error('Erro ao deletar o card:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
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
