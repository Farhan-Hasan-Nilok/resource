import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToMany,
	JoinTable,
} from 'typeorm';
import { Category } from './category';

@Entity()
export class Question {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	title: string;

	@Column()
	text: string;

	@ManyToMany(() => Category, {
		cascade: true,
		eager: true,
	})
	@JoinTable()
	categories: Category[];
}
