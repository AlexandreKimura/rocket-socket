import { injectable } from "tsyringe";
import { Message } from "../schemas/Message";

interface ICreateMessageDTO {
  to: string;
  text: string;
  roomId: string;
}

@injectable()
class CreateMessageService {

  async execute({ to, text, roomId }: ICreateMessageDTO) {
    const message = await Message.create({
      to,
      text,
      room_id: roomId
    })
    return message;
  }
}

export { CreateMessageService }