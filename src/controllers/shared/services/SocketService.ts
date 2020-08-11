import { NotificationMessage } from "controllers/notifications/models/NotificationMessage";
import { NotificationRepositoryService } from "controllers/notifications/services/NotificationRepositoryService";
import { EnvironmentSetupService } from "./EnvironmentSetupService";
import * as socketio from "socket.io";
import * as io from 'socket.io-client';


export class SocketService {

    private ioServer;
    private ioClient;
    private NOTIFICATION_EVENT = "message"
    
    constructor(
        private notificationRepositoryService:NotificationRepositoryService,
        private environmentSetupService:EnvironmentSetupService){
    }

    publishNotification(notification:NotificationMessage) {
        if (!this.ioClient) {
            this.ioClient = io(this.environmentSetupService.getPublisherUrl());
        }
        this.ioClient.emit(this.NOTIFICATION_EVENT, notification);
    }

    subscribeToPublishers() {
        this.ioServer = socketio(this.environmentSetupService.getSocketListeningPort());
        this.ioServer.on("connection", (socket:any)=>{
            console.log("a user connected");
            socket.on( this.NOTIFICATION_EVENT, (notification: NotificationMessage) => {
                this.notificationRepositoryService.notificationFromConsumer(notification)
            });
        });
    }

}