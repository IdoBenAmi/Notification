import { App } from './app';
import { NotificationController } from './controllers/notifications/NotificationController';
import { NotificationRepositoryService } from './controllers/notifications/services/NotificationRepositoryService';
import { NotificationBuilderService } from './controllers/notifications/services/NotificationBuilderService';
import { SocketService } from './controllers/shared/services/SocketService';
import { EnvironmentSetupService } from './controllers/shared/services/EnvironmentSetupService';

const environmentSetupService = new EnvironmentSetupService();
const notificationRepositoryService = new NotificationRepositoryService(new NotificationBuilderService());
const socketService = new SocketService(notificationRepositoryService, environmentSetupService)

const app = new App(
  [
    new NotificationController(notificationRepositoryService, socketService),
  ],
  environmentSetupService,
  socketService
);

app.listen();