import mongoose, { Document, Schema } from 'mongoose';

type Message = Document & {
  to: string;
  text: string;
  create_at: Date;
  room_id: string;
}

const MessageSchema = new Schema({
  to: {
    type: Schema.Types.ObjectId,
    ref: "Users"
  },
  text: String,
  create_at: {
    type: Date,
    default: Date.now()
  },
  room_id: {
    type: String,
    ref: "ChatRoom"
  }
});

const Message = mongoose.model<Message>("Messages", MessageSchema);

export { Message }