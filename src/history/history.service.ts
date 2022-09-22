import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { History } from './history.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/user.entity';
import { UserInterface } from 'src/user/user.service';
export interface HistoryInterface {
    idHistory: number,
    idUser: number,
    tanggalMulaiPerjalanan: Date,
    tanggalBerakhirPerjalanan: Date,
    destinasiPerjalanan: number,
}
@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(History)
    private historyRepository: Repository<HistoryInterface>,
  ) {}
create(history: HistoryInterface): Promise<HistoryInterface> {
    return this.historyRepository.save(
      this.historyRepository.create(history)
    );
  }
findAll(): Promise<HistoryInterface[]> {
    return this.historyRepository.find();
  }
update(id: string, data: any): Promise<any> {
    return this.historyRepository
    .createQueryBuilder()
    .update()
    .set({
      tanggalMulaiPerjalanan: data.tanggalMulaiPerjalanan,
      tanggalBerakhirPerjalanan: data.tanggalBerakhirPerjalanan,
      destinasiPerjalanan: data.destinasiPerjalanan
    })
    .where('idHistory = :id', { id })
    .execute()
  }
delete(id: string): Promise<any> {
    return this.historyRepository
    .createQueryBuilder()
    .delete()
    .from(History)
    .where('idHistory = :id', { id })
    .execute()
  }
}