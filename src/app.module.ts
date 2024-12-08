import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './databaseModule/database.module';
import { CategoriesModule } from './categories/categories.module';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: path.resolve(__dirname, '../src/envs/postgres/.env'),
    }),
    DatabaseModule,
    CategoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
