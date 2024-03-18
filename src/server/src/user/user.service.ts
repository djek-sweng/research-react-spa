import { Injectable } from '@nestjs/common';
import { DbService } from './../db/db.service';
import { UpdateUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(private db: DbService) {}

  async updateUser(userId: number, dto: UpdateUserDto) {
    const user = await this.db.user.update({
      where: { id: userId },
      data: { ...dto },
    });

    delete user.passwordHash;

    return user;
  }
}
