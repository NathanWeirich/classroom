import mongoose, { Schema, Document, Model } from 'mongoose'

export interface ICard extends Document {
  title: string
  year: number
  teacher: string
  profileAvatar: string
  banner: string
}

const CardSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  },

  profileAvatar: {
    type: String,
  },

  banner: {
    type: String,
    required: true,
    default:
      'https://media.discordapp.net/attachments/215613850689601537/1286078697266221106/default-banner.jpg?ex=66ec999f&is=66eb481f&hm=9150dca1b0854db412496e1055fd3d84135f920a0b7a858f911ecf6782cb155c&=&format=webp&width=1440&height=360',
  },
})

const Card: Model<ICard> =
  mongoose.models.Card || mongoose.model<ICard>('Card', CardSchema)

export default Card
