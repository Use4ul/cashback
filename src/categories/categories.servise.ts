import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entity/Categories.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatecoriesService {
  constructor(
    @InjectRepository(Category) private categoryModal: Repository<Category>,
  ) {}

  public getAll() {
    return this.categoryModal.find();
  }
}
