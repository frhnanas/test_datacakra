import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
export interface UserInterface {
    idUser: number,
    username: string,
    password: string,
    role: number,
}
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<UserInterface>,
  ) {}
create(user: UserInterface): Promise<UserInterface> {
    return this.userRepository.save(
      this.userRepository.create(user)
    );
  }
  findAll(): Promise<UserInterface[]> {
    return this.userRepository.find();
  }
  find(req): Promise<UserInterface> {
    const query = this.userRepository.createQueryBuilder('User')
    if(req.idUser){
        query.where('User.idUser = :reqId',{reqId: req.idUser})
    }
    return query.getOne()
  }
update(id: string, data: any): Promise<any> {
    return this.userRepository
    .createQueryBuilder()
    .update()
    .set({
      username: data.username,
      password: data.password,
      role: data.role
    })
    .where('idUser = :id', { id })
    .execute()
  }
delete(id: string): Promise<any> {
    return this.userRepository
    .createQueryBuilder()
    .delete()
    .from(User)
    .where('idUser = :id', { id })
    .execute()
  }
}