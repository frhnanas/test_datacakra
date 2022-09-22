import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity('User')
export class User {
  @PrimaryGeneratedColumn()
  idUser: number;
 
  @Column()
  username: string;
  
  @Column()
  password: string;
 
  @Column()
  role: number;
}