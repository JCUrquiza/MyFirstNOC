import { CheckService } from '../domain/use-cases/checks/check-service';
import { FileSystemDatasource } from '../infrastructure/datasources/file-system.datasources';
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository.impl';
import { CronService } from './cron/cron-service';

const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource() 
);

export class Server {

    public static start() {

        console.log('Server started...');

        // CronService.createJob(
        //     '*/3 * * * * *',
        //     () => {
        //         const url = 'https://google.com';
        //         // new CheckService().execute('https://google.com');
        //         new CheckService(
        //             fileSystemLogRepository,
        //             () => console.log(`${ url } is ok`),
        //             ( error ) => console.log( error )
        //         ).execute(url);
        //     }
        // );
        
    }

}

