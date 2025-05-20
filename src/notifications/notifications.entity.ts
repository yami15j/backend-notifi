import { Entity, CreateDateColumn, PrimaryGeneratedColumn, Column, } from 'typeorm';

@Entity()
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @Column()
  type: string;

  @CreateDateColumn()
  created_at: Date;
}
