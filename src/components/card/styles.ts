import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  font-family: Arial, sans-serif;
`

export const BannerContainer = styled.div`
  display: flex;
  position: relative;
  height: 100px;
  width: 300px;
  background-color: #0000ff;
  flex-direction: column;
  justify-content: space-around;
  padding: 16px;
  background-image: url('https://gstatic.com/classroom/themes/img_learnlanguage.jpg');
  background-size: cover;
`

export const Title = styled.p`
  color: white;
  font-size: 1rem;
  font-weight: 600;
`

export const Year = styled.p`
  color: white;
  font-size: 1rem;
  font-weight: 400;
`

export const Teacher = styled.p`
  color: white;
  font-size: 1rem;
  font-weight: 400;
`

export const Avatar = styled.img`
  position: absolute;
  bottom: -16px;
  right: 16px;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  border: 2px solid white;
`

export const Footer = styled.div`
  padding: 16px;
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #f0f0f0;
  height: 60px;
  width: 300px;
`
export const AvatarDefault = styled.div`
  background-color: black;
  position: absolute;
  bottom: -16px;
  right: 16px;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  border: 2px solid white;
`
export const DefaultProfileLetter = styled.p`
  text-align: center;
  vertical-align: center;
  color: white;
  font-size: 2rem;
  font-weight: 500;
`
export const ActivityContainer = styled.div`
  padding: 16px;
  display: flex;
  height: 140px;
  width: 300px;
`
