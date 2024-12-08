import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Category {
  @PrimaryColumn({ length: 32 })
  public id: string;

  @Column()
  public name: string;

  @Column()
  public description: string;

}
