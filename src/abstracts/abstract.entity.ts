import {
	CreateDateColumn,
	DeleteDateColumn,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
export abstract class AbstractEntity {
	@PrimaryGeneratedColumn()
	public id: string;

	@CreateDateColumn({ type: 'timestamptz' })
	public createdAt: Date;

	@UpdateDateColumn({ type: 'timestamptz' })
	public updatedAt: Date;

	@DeleteDateColumn()
	public deletedAt?: Date;
}
