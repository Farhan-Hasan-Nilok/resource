import { AbstractEntity } from '@/abstracts/abstract.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import User from './user';

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

	@ManyToOne(() => User, (user) => user.post)
	user: User;

	// @CreateDateColumn({ type: 'timestamptz' })
	// public createdAt: Date;

	// @UpdateDateColumn({ type: 'timestamptz' })
	// public updatedAt: Date;

	// @DeleteDateColumn()
	// public deletedAt?: Date;
}
