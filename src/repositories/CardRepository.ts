import Card from '../models/Card'
import { ICard } from '../models/Card'

export class CardRepository {
  async createCard(
    title: string,
    year: number,
    teacher: string,
    profileAvatar: string,
    banner: string
  ): Promise<ICard> {
    const card = new Card({ title, year, teacher, profileAvatar, banner })
    return await card.save()
  }

  async findAllCards(): Promise<ICard[]> {
    return await Card.find()
  }

  async findCardById(id: string): Promise<ICard | null> {
    return await Card.findById(id)
  }

  async deleteCard(id: string): Promise<ICard | null> {
    return await Card.findByIdAndDelete(id)
  }

  async updateCard(id: string, updateData: Partial<ICard>) {
    return await Card.findByIdAndUpdate(id, updateData, { new: true })
  }
}
