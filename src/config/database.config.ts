import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
 
export const devConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 3000,
  username: 'postgres',
  password: 'qwerty',
  database: 'localdb',
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: true,
}