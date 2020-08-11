import { EnvironmentSetup } from "../models/EnvironmentSetup";

export class EnvironmentSetupService {
    private environmentParams:EnvironmentSetup;

    constructor() {
        this.initProccessParams();
    }

    getApiListeningPort():number {
        return this.environmentParams.apiListeningPort;
    }

    getSocketListeningPort():number {
        return this.environmentParams.socketListeningPort;
    }

    getPublisherUrl():string {
        return this.environmentParams.publishURL;
    }

    private initProccessParams(){
        this.environmentParams = {
            apiListeningPort: process.env.API_LISTENING_PORT ? parseInt(process.env.API_LISTENING_PORT) : 5000,
            socketListeningPort: process.env.SOCKET_LISTENING_PORT ? parseInt(process.env.SOCKET_LISTENING_PORT) : 5001,
            publishURL: process.env.PUBLISH_URL ? process.env.PUBLISH_URL : 'http://localhost:3001'
        }
    }
}