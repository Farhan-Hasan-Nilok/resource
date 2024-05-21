import { AbstractEntity } from '@/abstracts/abstract.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import Post from './post';

@Entity('resource')
export default class Resource extends AbstractEntity {
	@Column()
	topic: string;

	@Column()
	description: string;

	@Column({ select: false })
	link: string;

	@OneToMany(() => Post, (post) => post.resource, {
		createForeignKeyConstraints: false,
	})
	posts: Post[];
}
