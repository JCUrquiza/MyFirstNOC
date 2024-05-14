import { LogEntity, LogSeverityLevel } from '../entities/log.entity';

// No quiero que se creen instancias de esta clase (por eso será abstracta)
export abstract class LogRepository {

    abstract saveLog( log: LogEntity ): Promise <void>;
    abstract getLogs( severityLovel: LogSeverityLevel ): Promise <LogEntity[]>;

}



