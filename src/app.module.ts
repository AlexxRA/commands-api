import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CommandModule } from './command/command.module'
import { PlatformModule } from './platform/platform.module'

@Module({
  imports: [
    CommandModule,
    PlatformModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule.forRoot()],
      useFactory: async (configService: ConfigService) => {
        const HOST = configService.get<string>('MONGO_HOST');
        const PORT = configService.get<string>('MONGO_PORT');
        const DB_NAME = configService.get<string>('DB_NAME');

        return {
          uri: `mongodb://${HOST}:${PORT}/${DB_NAME}`,
          useFindAndModify: false,
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
