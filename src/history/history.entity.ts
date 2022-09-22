import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
 
@Entity('History')
export class History {
  @PrimaryGeneratedColumn()
  idHistory: number;

  @Column()
  idUser: number;
 
  @Column({type: 'timestamptz'})
  tanggalMulaiPerjalanan: Date;
  
  @Column({type: 'timestamptz'})
  tanggalBerakhirPerjalanan: Date;
 
  @Column()
  destinasiPerjalanan: string;

  @ManyToOne(() => User, (User) => User.idUser, { cascade: true })
  @JoinColumn({ name: 'idUser' })
  user: User;
}