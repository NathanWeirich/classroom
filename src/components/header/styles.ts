import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`

export const MenuButton = styled.button`
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

export const LogoText = styled.span`
  margin-left: 8px;
  color: #555;
  font-weight: 500;
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const UserProfile = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
`
