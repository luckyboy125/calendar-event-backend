import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  CalendarEvent,
  CalendarEventSchema,
} from './schemas/calendarevent.schema';
import { CalendarEventController } from './controllers/calendarevent.controller';
import { CalendarEventService } from './services/calendarevent.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/alicia_test_db'),
    MongooseModule.forFeature([
      { name: CalendarEvent.name, schema: CalendarEventSchema },
    ]),
  ],
  controllers: [AppController, CalendarEventController],
  providers: [AppService, CalendarEventService],
})
export class AppModule {}
