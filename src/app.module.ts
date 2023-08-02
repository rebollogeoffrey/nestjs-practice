import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './config/database.config';
import { ArticlesService } from './articles/articles.service';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],

      useFactory: () => databaseConfig,
    }),
    ArticlesModule,
  ],
  controllers: [AppController],
  providers: [AppService, ArticlesService],
})
export class AppModule {}
