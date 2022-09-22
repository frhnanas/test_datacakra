import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
import { HistoryModule } from './history/history.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'qwerty',
    database: 'localdb',
    entities: [__dirname + '/**/**/!(*.d).entity.{ts,js}'],
  }), UserModule, HistoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
