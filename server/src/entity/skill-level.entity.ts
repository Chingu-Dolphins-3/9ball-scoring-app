import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Player } from '../player/player.entity';

@Entity('skill_level')
export class SkillLevel extends BaseEntity {
  @Column({
    length: 20,
    nullable: false,
  })
  public format: string;

  @PrimaryGeneratedColumn({
    type: 'int',
  })
  public id: number;

  @OneToMany(type => Player, player => player.skillLevel)
  public players: Player[];

  @Column({
    default: 0,
    name: 'points_required',
    nullable: false,
    type: 'smallint',
  })
  public pointsRequired: number;

  @Column({
    name: 'skill_level',
    nullable: false,
    type: 'smallint',
  })
  public skillLevel: number;

  @Column({
    default: 1,
    nullable: false,
    type: 'smallint',
  })
  public timeouts: number;

  @Column({
    default: 1,
    name: 'tournament_tier',
    nullable: false,
    type: 'smallint',
  })
  public tournamentTier: number;
}
