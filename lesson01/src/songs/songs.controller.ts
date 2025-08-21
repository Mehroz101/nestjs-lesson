import { Body, Controller, Get, Inject, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song-dto';
import { Connection } from 'src/common/constants/connection';

@Controller('songs')
export class SongsController {
  constructor(
    private readonly songsService: SongsService,
    @Inject('CONNECTION')
    private connection: Connection,
  ) {
    console.log(
      `this is the connection string: ${this.connection.CONNECTION_STRING}`,
    );
  }
  @Get()
  findAll() {
    return this.songsService.findAll();
  }
  @Post()
  create(@Body() createSongDto: CreateSongDto) {
    return this.songsService.create(createSongDto);
  }
  @Put(':id')
  update() {
    return 'This action updates a song';
  }
  @Get(':id')
  findOne() {
    return 'This action returns a single song';
  }
}
