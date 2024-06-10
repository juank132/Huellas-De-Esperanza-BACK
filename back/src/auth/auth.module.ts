import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entidades/user.entity';
import { Auth0Module } from '../auth0/auth0.module';
import { Auth0Guard } from '../guards/auth0.guard';
import { ShelterEntity } from '../entidades/shelter.entity';
import { MailService } from '../mails/mail.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity, ShelterEntity]), Auth0Module],
  providers: [AuthService, Auth0Guard,MailService, ConfigModule],
  controllers: [AuthController]
})
export class AuthModule {}
