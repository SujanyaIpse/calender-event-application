import { Module } from '@nestjs/common';
import { EventsModule } from './events/events.module';

@Module({
  imports: [EventsModule],  // Import only the EventsModule without TypeOrmModule
})
export class AppModule {}
