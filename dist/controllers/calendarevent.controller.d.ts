import { CalendarEvent } from '../schemas/calendarevent.schema';
import { CalendarEventService } from '../services/calendarevent.service';
export declare class CalendarEventController {
    private readonly calendarEventService;
    constructor(calendarEventService: CalendarEventService);
    createBook(response: any, calendar: CalendarEvent): Promise<any>;
    fetchAll(response: any): Promise<any>;
    findById(response: any, id: any): Promise<any>;
    update(response: any, id: any, calendarEvent: CalendarEvent): Promise<any>;
    delete(response: any, id: any): Promise<any>;
}
