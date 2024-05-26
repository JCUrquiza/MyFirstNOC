import { PrismaClient } from '@prisma/client';
import { envs } from './config/plugins/envs.plugin';
import { LogModel, MongoDatabase } from './data/mongo';
import { Server } from './presentation/server';

// Función anónima autoinvicada:
( async() => {

    main();

})();

async function main() {

    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME
    });

    // const prisma = new PrismaClient();
    // const newLog = await prisma.logModel.create({
    //     data: {
    //         level: 'HIGH',
    //         message: 'Test message',
    //         origin: 'App.ts'
    //     }
    // });
    // console.log(newLog);

    // const logs = await prisma.logModel.findMany();
    // console.log(logs);


    // Crear una colección = tables, documento = registro
    // const newLog = await LogModel.create({
    //     message: 'Test message desde Mongo',
    //     origin: 'App.ts',
    //     level: 'low'
    // });
    // await newLog.save();

    // const logs = await LogModel.find();
    // console.log(logs);

    Server.start();
}
