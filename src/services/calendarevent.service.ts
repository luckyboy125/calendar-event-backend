import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CalendarEvent,
  CalendarEventDocument,
} from 'src/schemas/CalendarEvent.schema';

@Injectable()
export class CalendarEventService {
  constructor(
    @InjectModel(CalendarEvent.name)
    private calendarEventModel: Model<CalendarEventDocument>,
  ) {}

  async create(CalendarEvent: CalendarEvent): Promise<CalendarEvent> {
    const newCalendarEvent = new this.calendarEventModel(CalendarEvent);
    return newCalendarEvent.save();
  }

  async readAll(): Promise<CalendarEvent[]> {
    return await this.calendarEventModel.find().exec();
  }

  async readById(id): Promise<CalendarEvent> {
    return await this.calendarEventModel.findOne({ id }).exec();
  }

  async update(id, CalendarEvent: CalendarEvent): Promise<CalendarEvent> {
    return await this.calendarEventModel.findOneAndUpdate(
      { id },
      CalendarEvent,
      {
        new: true,
      },
    );
  }

  async delete(id): Promise<any> {
    return await this.calendarEventModel.findOneAndRemove({ id });
  }
}
