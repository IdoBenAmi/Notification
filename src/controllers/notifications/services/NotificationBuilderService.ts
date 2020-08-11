import { IBuilderService } from "../../shared/interfaces/IBuilderService";
import { NotificationMessage } from "../models/NotificationMessage";
import { v4 as uuidv4 } from 'uuid';


export class NotificationBuilderService implements IBuilderService<string, NotificationMessage> {
    async build(message:string): Promise<NotificationMessage> {
        return {
            id: uuidv4(),
            something: message
        }
    }
}