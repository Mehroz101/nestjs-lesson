import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from './config/database/database.config';
import { envValidationSchema } from './config/validation/env.validation';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env.${process.env.NODE_ENV || 'development'}`],
      load: [databaseConfig],
      validationSchema: envValidationSchema
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const db = config.get("database");
        return {
          type: 'postgres',
          host: db.host,
          port: db.port,
          username: db.username,
          password: db.password,
          database: db.database,
          // Best practice: migrations for schema; never sync in prod
          synchronize: true,
          autoLoadEntities: true, // ok in modular monoliths; disable if you prefer explicit entities
          logging: db.logging,
          extra: { max: db.poolSize }, // pool
        }
      }
    }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
