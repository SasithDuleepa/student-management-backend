import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import * as path from 'path';

export const mysqlConfig: MysqlConnectionOptions = {
    type: 'mysql', // Database type
    host: 'localhost', // Database host
    port: 3306, // MySQL default port
    username: 'root', // MySQL username
    password: 'root', // MySQL password
    database: 'nest_student_management', // Your database name
    entities: [path.resolve(__dirname, '..') + '/**/*.entity{.ts,.js}'],
    synchronize: true, // Sync DB schema (disable in production)
};
