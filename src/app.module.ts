import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppLoggerMiddleware } from './middlewares/logger';
import { PostsModule } from './posts/posts.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ConfigsModule } from './configs/configs.module';

@Module({
  imports: [PostsModule, AuthenticationModule, ConfigsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
