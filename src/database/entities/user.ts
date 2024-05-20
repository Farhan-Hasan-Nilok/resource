import { AbstractEntity } from '@/abstracts/abstract.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import Post from './post';

@Entity('user')
export default class User extends AbstractEntity {
	@Column()
	name: string;

	@Column()
	numberOfPost: number;

	@OneToMany(() => Post, (post) => post.user)
	post: Post[];
}
