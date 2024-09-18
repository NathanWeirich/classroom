import styled from 'styled-components'

const Card = styled.div`
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  font-family: Arial, sans-serif;
`

const Header = styled.div`
  background-color: #62727b; // Change this color to match your header background
  color: white;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h2`
  font-size: 18px;
  margin: 0;
`

const Year = styled.p`
  margin: 0;
  font-size: 14px;
`

const Avatar = styled.div`
  background-color: #4caf50; // Background color for the avatar circle
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  margin-right: 16px;
`

const Content = styled.div`
  padding: 16px;
`

const Footer = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #f0f0f0;
`

const FooterIcon = styled.div`
  font-size: 20px;
  color: #888;
`
export default {
  Card,
  Header,
  Title,
  Year,
  Avatar,
  Content,
  Footer,
  FooterIcon,
}
