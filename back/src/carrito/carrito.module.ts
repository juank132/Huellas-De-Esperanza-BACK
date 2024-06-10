import { Module } from '@nestjs/common';
import { CarritoController } from './carrito.controller';
import { CarritoService } from './carrito.service';
import { CarritoRepository } from './carrito.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersEntity } from '../entidades/orders.entity';
import { OrderDetailsEntity } from '../entidades/orderDetail.entity';
import { UserEntity } from '../entidades/user.entity';
import { ShelterEntity } from '../entidades/shelter.entity';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([OrdersEntity,OrderDetailsEntity,UserEntity,ShelterEntity])],
  controllers: [CarritoController],
  providers: [CarritoService, CarritoRepository,JwtService]
})
export class CarritoModule {}
