import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Resource {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  for: string;

  @Column()
  description: string;

  @Column()
  link: string;
}
