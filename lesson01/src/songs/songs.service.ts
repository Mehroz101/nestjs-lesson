import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  private readonly songs: string[] = [];

  create(song: any) {
    this.songs.push(song);
    return { message: 'Song added', data: song };
  }

  findAll() {
    return this.songs;
  }
}
