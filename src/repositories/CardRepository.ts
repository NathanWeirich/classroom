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
}
