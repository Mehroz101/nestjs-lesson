import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index()
  @Column({ type: 'varchar', unique: false, nullable: false })
  name: string;

  @Column({ type: 'varchar', unique: true, nullable: false })
  email: string;
}