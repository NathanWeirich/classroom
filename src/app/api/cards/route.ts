import connectDB from '@/database/mongodb'
import { CardService } from '@/services/CardService'
import { NextRequest, NextResponse } from 'next/server'

const cardService = new CardService()

export async function POST(req: NextRequest) {
  await connectDB()
  const { title, year, teacher, profileAvatar, banner } = await req.json()

  try {
    const card = await cardService.createCard(
      title,
      year,
      teacher,
      profileAvatar,
      banner
    )
    return NextResponse.json(card, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 })
  }
}
