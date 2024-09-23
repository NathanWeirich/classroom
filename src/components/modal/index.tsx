"use client"

import React, { useState } from 'react';
import { Modal as MuiModal, TextField, Typography } from '@mui/material';
import { ModalContainer, Title, StyledButton } from './style';

interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ open, handleClose }) => {
    // Estados para armazenar os valores dos campos
    const [title, setTitle] = useState('');
    const [year, setYear] = useState<number | string>('');
    const [teacher, setTeacher] = useState('');
  
    // Função para enviar os dados ao backend
    const handleSubmit = async () => {
      const payload = {
        title: title,
        year: Number(year), // Certifique-se de que o ano é um número
        teacher: teacher,
      };
  
      try {
        const response = await fetch('/api/cards', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
  
        if (response.ok) {
          console.log('Dados enviados com sucesso!');
          handleClose(); // Fecha o modal após o sucesso
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };
  
    return (
      <MuiModal open={open} onClose={handleClose}>
        <ModalContainer>
          <Title variant="h6">Criar Nova Matéria</Title>
          <Typography variant="body2" gutterBottom>
            Você fez login como <strong>VASCO</strong>
          </Typography>
  
          {/* Campo para o título da matéria */}
          <TextField
            fullWidth
            label="Título da Matéria"
            variant="outlined"
            margin="normal"
            placeholder="Digite o Título da Matéria"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // Atualiza o estado com o título
          />
  
          {/* Campo para o ano da matéria */}
          <TextField
            fullWidth
            label="Ano da Matéria"
            variant="outlined"
            margin="normal"
            type="number"
            placeholder="Digite o Ano da Matéria"
            value={year}
            onChange={(e) => setYear(e.target.value)} // Atualiza o estado com o ano
          />
  
          {/* Campo para o nome do professor */}
          <TextField
            fullWidth
            label="Nome do Professor"
            variant="outlined"
            margin="normal"
            placeholder="Digite o Nome do Professor"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)} // Atualiza o estado com o nome do professor
          />
  
          {/* Botões para Criar e Cancelar */}
          <StyledButton
            variant="contained"
            color="primary"
            style={{ marginBottom: 5 }}
            onClick={handleSubmit} // Chama a função para enviar os dados
          >
            Criar
          </StyledButton>
          <StyledButton variant="outlined" color="secondary" onClick={handleClose}>
            Cancelar
          </StyledButton>
        </ModalContainer>
      </MuiModal>
    );
  };
  
  export default Modal;