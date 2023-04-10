import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/key';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [MongooseModule.forRoot(config.mongoUri), ProductsModule],
})
export class AppModule {}
