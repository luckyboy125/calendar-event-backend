import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type CalendarEventDocument = CalendarEvent & Document;

@Schema()
export class CalendarEvent {
  @Prop({ default: uuidv4 })
  id: string;

  @Prop()
  type: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  start: string;

  @Prop()
  end: string;

  @Prop()
  color: string;
}

export const CalendarEventSchema = SchemaFactory.createForClass(CalendarEvent);
