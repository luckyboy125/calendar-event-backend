import { Model } from 'mongoose';
import { CalendarEvent, CalendarEventDocument } from 'src/schemas/CalendarEvent.schema';
export declare class CalendarEventService {
    private calendarEventModel;
    constructor(calendarEventModel: Model<CalendarEventDocument>);
    create(CalendarEvent: CalendarEvent): Promise<CalendarEvent>;
    readAll(): Promise<CalendarEvent[]>;
    readById(id: any): Promise<CalendarEvent>;
    update(id: any, CalendarEvent: CalendarEvent): Promise<CalendarEvent>;
    delete(id: any): Promise<any>;
}
