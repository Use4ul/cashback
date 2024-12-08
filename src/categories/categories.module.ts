import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesController } from './categories.controller';
import { Module } from '@nestjs/common';
import { CatecoriesService } from './categories.servise';
import { Category } from './entity/Categories.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategoriesController],
  providers: [CatecoriesService],
})
export class CategoriesModule {}
