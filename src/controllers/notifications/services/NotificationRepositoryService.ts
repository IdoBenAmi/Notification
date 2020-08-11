import { NotificationMessage } from "../models/NotificationMessage";
import { NotificationBuilderService } from "./NotificationBuilderService";
import { SocketService } from "controllers/shared/services/SocketService";

export class NotificationRepositoryService {
    private notifications: Array<NotificationMessage>;
 
    constructor(
        private notificationBuilderService:NotificationBuilderService){
        this.notifications = [];
    }

    async addNotification(messgae:string): Promise<NotificationMessage> {
        const newNotification = await this.notificationBuilderService.build(messgae);
        this.notifications.push(newNotification);
        return newNotification;
    }

    async notificationFromConsumer(notification:NotificationMessage): Promise<NotificationMessage> {
        this.notifications.push(notification);
        return notification;
    }

    async getAllNotifications(): Promise<Array<NotificationMessage>> {
        return this.notifications;
    }
}