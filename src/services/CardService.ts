import { ICard } from '@/models/Card'
import { CardRepository } from '@/repositories/CardRepository'

export class CardService {
  private cardRepository: CardRepository

  constructor() {
    this.cardRepository = new CardRepository()
  }

  async createCard(
    title: string,
    year: number,
    teacher: string,
    profileAvatar: string,
    banner: string
  ): Promise<ICard> {
    return await this.cardRepository.createCard(
      title,
      year,
      teacher,
      profileAvatar,
      banner
    )
  }
}
