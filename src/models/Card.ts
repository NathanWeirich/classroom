import mongoose, { Schema, Document } from 'mongoose'

export interface ICard extends Document {
  title: string
  description: string
  teacher: string
  imageUrl: string
}

const CardSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
    default: '/public/default-banner.jpg',
  },
})

export default mongoose.models.Card || mongoose.model<ICard>('Card', CardSchema)
