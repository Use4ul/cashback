import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CatecoriesService } from './categories.servise';

@Controller()
export class CategoriesController {
  constructor(private categories: CatecoriesService) {}
  @Get('/')
  public getAll() {
    return this.categories.getAll();
  }

  @Get('/:id')
  public getOne(@Param('id') id: number) {
    return 'Electronics';
  }

  @Post('/')
  public create(@Body() body: { name: string }) {
    return body;
  }

  @Put('/:id')
  public update(@Body() body: { name: string }) {
    return body;
  }

  @Delete('/:id')
  public delete(@Param('id') id: number) {
    return `Deleted category with id: ${id}`;
  }
}
