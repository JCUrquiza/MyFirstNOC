import { LogEntity, LogSeverityLevel } from '../entities/log.entity';

// No quiero que se creen instancias de esta clase (por eso será abstracta)
export abstract class LogDatasource {

    abstract saveLog( log: LogEntity ): Promise <void>;
    abstract getLogs( severityLevel: LogSeverityLevel ): Promise <LogEntity[]>;

}



