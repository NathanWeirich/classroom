import connectDB from '@/database/mongodb'
import { CardService } from '@/services/CardService'
import { NextRequest, NextResponse } from 'next/server'

const cardService = new CardService()

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB()
  const id = params.id
  const updateData = await req.json()

  try {
    const updateCard = await cardService.updateCard(id, updateData)
    return NextResponse.json(updateCard, { status: 200 })
  } catch (error) {
    return NextResponse.json(error, { status: 400 })
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB()
  const id = params.id

  try {
    const deletedCard = await cardService.deleteCard(id)
    return NextResponse.json(deletedCard, { status: 200 })
  } catch (error) {
    return NextResponse.json(error, { status: 400 })
  }
}
