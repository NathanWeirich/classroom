import styled from 'styled-components'
import { Box, Typography, Button } from '@mui/material'

// Estilizando o container do modal
export const ModalContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`

export const Title = styled(Typography)`
  margin-bottom: 16px;
  font-weight: bold;
`

export const StyledButton = styled(Button)`
  margin-top: 16px;
  width: 100%;
`
