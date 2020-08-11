import * as express from 'express';
import { NotificationMessage } from './models/NotificationMessage';
import { NotificationBuilderService } from './services/NotificationBuilderService';
import { NotificationRepositoryService } from './services/NotificationRepositoryService';
import { SocketService } from 'controllers/shared/services/SocketService';

 
export class NotificationController {
  public path = '/api/resource';
  public router = express.Router();
 
  
  constructor(
    private notificationRepositoryService:NotificationRepositoryService,
    private socketService:SocketService) {
    this.intializeRoutes();
  }
 
  getNotifications = async (request: express.Request, response: express.Response) => {
    const notifications = await this.notificationRepositoryService.getAllNotifications();
    response.send(notifications);
  }
 
  createNotification = async (request: express.Request, response: express.Response) => {
    const notification: NotificationMessage = await this.notificationRepositoryService.addNotification(request.body.something)
    this.socketService.publishNotification(notification);
    response.send(notification);
  }

  private intializeRoutes() {
    this.router.get(this.path, this.getNotifications);
    this.router.post(this.path, this.createNotification);
  }

}