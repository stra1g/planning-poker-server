import {
	BaseEntity, Entity 
} from 'typeorm'

@Entity({
	name: 'games'
})
export class Game extends BaseEntity{
	public name: string
  
	public voting_type: string
}
