import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AppService } from 'src/app.service';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { HistoryController } from './history.controller';
import { History } from './history.entity';
import { HistoryService } from './history.service';

@Module({
  imports: [TypeOrmModule.forFeature([History, User])],
  controllers: [HistoryController],
  providers: [HistoryService,UserService, AppService]
})
export class HistoryModule {}
