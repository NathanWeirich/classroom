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
  },
})

const bannerUrls = [
  'https://gstatic.com/classroom/themes/img_learnlanguage.jpg',
  'https://www.gstatic.com/classroom/themes/img_read.jpg',
  'https://gstatic.com/classroom/themes/img_bookclub.jpg',
  'https://gstatic.com/classroom/themes/img_backtoschool.jpg',
  'https://gstatic.com/classroom/themes/img_reachout.jpg',
]

CardSchema.pre<ICard>('save', function (next) {
  if (!this.banner || this.banner === '') {
    const randomBanner =
      bannerUrls[Math.floor(Math.random() * bannerUrls.length)]
    this.banner = randomBanner
  }
  next()
})

const Card: Model<ICard> =
  mongoose.models.Card || mongoose.model<ICard>('Card', CardSchema)

export default Card
