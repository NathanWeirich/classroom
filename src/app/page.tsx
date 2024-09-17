import React from 'react'
import Header from '@/components/header/index'
import Card from '@/components/card/index'

const data = [
  {
    title: 'string',
    year: 'string',
    description: 'string',
    teacher: 'string',
    imageUrl: 'string',
  },
  {
    title: 'string2',
    year: 'string2',
    description: 'string2',
    teacher: 'string2',
    imageUrl: 'string2',
  },
]
const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div style={{display:'flex', gap:24, padding:24}}>
      {data.map((card, index) => (
        <Card
          title={card.title}
          key={index}
          year={card.year}
          description={card.description}
          teacher={card.teacher}
          imageUrl={card.imageUrl}
        />
      ))}
      </div>
    </>
  )
}

export default Home
