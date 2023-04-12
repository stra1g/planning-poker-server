import {
	Column, 
	CreateDateColumn, 
	DeleteDateColumn, 
	PrimaryGeneratedColumn, 
	UpdateDateColumn 
} from 'typeorm'

export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
	public id: string

  @Column()
  public is_deleted: boolean

  @DeleteDateColumn()
  public deleted_at: Date

  @CreateDateColumn()
  public created_at: Date

  @UpdateDateColumn()
  public updated_at: Date
}
