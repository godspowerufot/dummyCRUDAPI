import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';

@Module({

  


  imports: [TasksModule],
  controllers: [ AppController],
  providers: [AppService],
})
export class AppModule {}
