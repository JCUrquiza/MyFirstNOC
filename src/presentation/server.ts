import { CronService } from "./cron/cron-service";

export class Server {

    public static start() {

        console.log('Server started...');

        CronService.createJob(
            '*/3 * * * * *',
            () => {
                const date = new Date();
                console.log('3 seconds: ', date);   
            }
        );
        
    }

}

