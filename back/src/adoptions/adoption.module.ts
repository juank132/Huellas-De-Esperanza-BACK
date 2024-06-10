import { Module } from '@nestjs/common';
import { AdoptionService } from './adoption.service';
import { AdoptionController } from './adoption.controller';
import { AdoptionRepository } from './adoption.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdoptionEntity } from '../entidades/adoption.entity';
import { ShelterEntity } from 'src/entidades/shelter.entity';
import { UserEntity } from '../entidades/user.Entity';
import { PetsEntity } from '../entidades/pets.entity';
import { PetsService } from '../pets/pets.service';
import { PetsRepository } from '../pets/pets.repository';
import { JwtService } from '@nestjs/jwt';
import { MailService } from '../mails/mail.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports:[TypeOrmModule.forFeature([AdoptionEntity, ShelterEntity, UserEntity, PetsEntity])],
  providers: [AdoptionService,AdoptionRepository,PetsService, PetsRepository,JwtService,MailService,ConfigService],
  controllers: [AdoptionController],
})
export class AdoptionModule {}
