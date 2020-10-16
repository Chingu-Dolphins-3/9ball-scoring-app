import { IsIn, IsOptional } from 'class-validator';

import { Division } from '../../division/division.entity';
import { HostLocation } from '../../host-location/host-location.entity';
import { PlayerFormat } from '../../player/player-format.enum';

export class GetTeamsFilterDto {
  @IsOptional()
  public division: Division;

  @IsIn([PlayerFormat.EIGHT, PlayerFormat.NINE])
  @IsOptional()
  public format: PlayerFormat;

  @IsOptional()
  public hostLocation: HostLocation;
}
