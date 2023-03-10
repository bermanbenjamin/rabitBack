import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UserRepository } from './user.repository';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [],
  providers: [PrismaService, UserService, UserResolver, UserRepository],
  exports: [UserService],
})
export class UserModule {}
