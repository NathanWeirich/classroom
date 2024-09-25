"use client"

import React, { useState } from 'react';
import { Modal as MuiModal, TextField, Typography } from '@mui/material';
import { ModalContainer, Title, StyledButton } from './style';

interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ open, handleClose }) => {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState<number | string>('');
    const [teacher, setTeacher] = useState('');
  
    const handleSubmit = async () => {
      const payload = {
        title: title,
        year: Number(year), 
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
          handleClose(); 
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
  
          
          <TextField
            fullWidth
            label="Título da Matéria"
            variant="outlined"
            margin="normal"
            placeholder="Digite o Título da Matéria"
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
          />
  
          
          <TextField
            fullWidth
            label="Ano da Matéria"
            variant="outlined"
            margin="normal"
            type="number"
            placeholder="Digite o Ano da Matéria"
            value={year}
            onChange={(e) => setYear(e.target.value)} 
          />
  
          
          <TextField
            fullWidth
            label="Nome do Professor"
            variant="outlined"
            margin="normal"
            placeholder="Digite o Nome do Professor"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)} 
          />
  
          
          <StyledButton
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            style={{marginBottom: 10}}
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