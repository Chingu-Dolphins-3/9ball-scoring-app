import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Match } from '../match/match.entity';

@Entity()
export class Session extends BaseEntity {
  @Column({
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
    nullable: false,
    type: 'timestamptz',
  })
  public createdAt: Date;

  @PrimaryGeneratedColumn({
    type: 'int',
  })
  public id: number;

  @OneToMany(type => Match, match => match.sessionId, {
    cascade: ['insert', 'update', 'remove'],
  })
  public matches: Match[];

  @Column({
    length: 10,
    nullable: false,
  })
  public name: string;

  @Column({
    default: null,
    name: 'updated_at',
    nullable: true,
    type: 'timestamptz',
  })
  public updatedAt: Date;

  @Column({
    nullable: false,
    type: 'int',
  })
  public year: number;
}
