import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ArticlesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  author: string;

  @Column()
  creationDate: string;
}
