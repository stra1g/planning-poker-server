import {
	Model as Entity
} from 'objection'

export abstract class BaseEntity extends Entity {
	constructor() {
		super()
	}

	static get idColumn() {
		return 'id'
	}

	public id: string

	public is_deleted: boolean

	public deleted_at: Date

	public created_at: Date

	public updated_at: Date

	$beforeUpdate() {
		this.updated_at = new Date()
	}
}
