import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './products';

@Entity()
export class Company {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	description: string;

	@OneToMany(() => Product, (product) => product.company, {
		cascade: true,
		eager: true,
	})
	product: Product[];
}
