import { AbstractEntity } from '@/abstracts/abstract.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import Resource from './resources';
// import User from './user';

@Entity('posts')
export default class Post extends AbstractEntity {
	@Column()
	title: string;

	@Column()
	content: string;

	@Column({
		unique: true,
	})
	url: string;

	@Column()
	resourceId: number;

	@ManyToOne(() => Resource, (resource) => resource.posts, {
		cascade: true,
		eager: true,
	})
	resource: Resource;
}
