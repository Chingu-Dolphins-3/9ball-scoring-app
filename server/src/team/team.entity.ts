import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

import { Division } from '../division/division.entity';
import { HostLocation } from '../host-location/host-location.entity';
import { PlayerFormat } from '../player/player-format.enum';
import { PlayerTeam } from '../player-team/player-team.entity';
import { TeamMatch } from '../team-match/team-match.entity';

@Entity()
@Unique('UQ_division_format_teamName', ['division', 'format', 'teamName'])
export class Team extends BaseEntity {
  @Column({
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
    nullable: false,
    type: 'timestamptz',
  })
  public createdAt: Date;

  @ManyToOne(type => Division, division => division.teams)
  @JoinColumn({
    name: 'division',
  })
  public division: Division;

  @Column({
    default: PlayerFormat.NINE,
    enum: PlayerFormat,
    nullable: false,
    type: 'enum',
  })
  public format: PlayerFormat;

  @ManyToOne(type => HostLocation, hostLocation => hostLocation.teams)
  @JoinColumn({
    name: 'host_location',
  })
  public hostLocation: HostLocation;

  @PrimaryGeneratedColumn({
    type: 'int',
  })
  public id: number;

  @OneToMany(type => TeamMatch, teamMatch => teamMatch.team, {
    cascade: ['insert', 'update', 'remove'],
  })
  public matches: TeamMatch[];

  @OneToMany(type => PlayerTeam, playerTeam => playerTeam.team, {
    cascade: ['insert', 'update', 'remove'],
  })
  public players: PlayerTeam[];

  @Column({
    length: 50,
    name: 'team_name',
    nullable: false,
  })
  public teamName: string;

  @Column({
    name: 'team_number',
    nullable: false,
    type: 'int',
  })
  public teamNumber: number;

  @Column({
    default: null,
    name: 'updated_at',
    nullable: true,
    type: 'timestamptz',
  })
  public updatedAt: Date;
}
