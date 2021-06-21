import { injectable } from "tsyringe";
import { Message } from "../schemas/Message";

@injectable()
class GetMessagesByChatRoomService {
  async execute(roomId: string) {
    const messages = await Message.find({
      room_id: roomId
    }).populate("to").exec();

    return messages;
  }
}

export { GetMessagesByChatRoomService }