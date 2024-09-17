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
    required: true,
  },

  banner: {
    type: String,
    required: true,
    default: '/public/default-banner.jpg',
  },
})

const Card: Model<ICard> =
  mongoose.models.Card || mongoose.model<ICard>('Card', CardSchema)

export default Card
