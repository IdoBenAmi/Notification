import * as express from 'express';
import * as bodyParser from 'body-parser';
import { SocketService } from './controllers/shared/services/SocketService';
import { EnvironmentSetupService } from './controllers/shared/services/EnvironmentSetupService';
 
export class App {
  public app: express.Application;
  private listeningPort:number;

  constructor(
    private controllers:Array<any>, 
    private environmentSetupService:EnvironmentSetupService, 
    private socketService:SocketService) {
      this.app = express();      
      this.listeningPort = this.environmentSetupService.getApiListeningPort();
      this.initializeMiddlewares();
      this.initializeControllers(this.controllers);
      this.subscribeToNotifications();
  }
 
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
  }
 
  private initializeControllers(controllers) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  private subscribeToNotifications(){
    this.socketService.subscribeToPublishers();
  }
 
  public listen() {
    this.app.listen(this.listeningPort, () => {
      console.log(`App listening on the port ${this.listeningPort}`);
    });
  }
}