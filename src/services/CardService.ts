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

  async getAllCards(): Promise<ICard[]> {
    return await this.cardRepository.findAllCards()
  }

  async updateCard(
    id: string,
    updateData: Partial<ICard>
  ): Promise<ICard | null> {
    const card = await this.cardRepository.findCardById(id)
    if (!card) {
      throw new Error('Card not found')
    }

    return await this.cardRepository.updateCard(id, updateData)
  }

  async deleteCard(id: string): Promise<ICard | null> {
    const card = await this.cardRepository.findCardById(id)
    if (!card) {
      throw new Error('Card not found')
    }

    return await this.cardRepository.deleteCard(id)
  }
}
