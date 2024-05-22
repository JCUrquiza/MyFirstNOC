import { envs } from '../config/plugins/envs.plugin';
import { CheckService } from '../domain/use-cases/checks/check-service';
import { SendEmailLogs } from '../domain/use-cases/email/send-email-logs';
import { FileSystemDatasource } from '../infrastructure/datasources/file-system.datasources';
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository.impl';
import { CronService } from './cron/cron-service';
import { EmailService } from './email/email.service';

const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource() 
);

const emailService = new EmailService();


export class Server {

    public static start() {

        console.log('Server started......');

        // Mandar el email del use case
        new SendEmailLogs(
            emailService,
            fileSystemLogRepository
        ).execute(
            ['gurquiza8@gmail.com', 'gurquiza8@gmail.com']
        );

        // emailService.sendEmailWithFileSystemLogs(
        //     ['gurquiza8@gmail.com', 'gurquiza8@gmail.com']
        // );

        // {
        //     to: 'gurquiza8@gmail.com',
        //     subject: 'Logs de sistema',
        //     htmlBody: `
        //         <h3>Logs de sistema</h3>
        //         <p>Correo de prueba</p>
        //         <p>Ver logs adjuntos</p>
        //     `
        // }

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

