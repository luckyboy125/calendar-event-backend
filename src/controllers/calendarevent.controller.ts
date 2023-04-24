import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CalendarEvent } from '../schemas/calendarevent.schema';
import { CalendarEventService } from '../services/calendarevent.service';

@Controller('calendar')
export class CalendarEventController {
  constructor(private readonly calendarEventService: CalendarEventService) {}
  @Post()
  async createBook(@Res() response, @Body() calendar: CalendarEvent) {
    const newCalendarEvent = await this.calendarEventService.create(calendar);
    return response.status(HttpStatus.CREATED).json(newCalendarEvent);
  }

  @Get()
  async fetchAll(@Res() response) {
    const calendar = await this.calendarEventService.readAll();
    return response.status(HttpStatus.OK).json(calendar);
  }

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const calendarEvent = await this.calendarEventService.readById(id);
    return response.status(HttpStatus.OK).json(calendarEvent);
  }

  @Put('/:id')
  async update(
    @Res() response,
    @Param('id') id,
    @Body() calendarEvent: CalendarEvent,
  ) {
    const updatedCalendarEvent = await this.calendarEventService.update(
      id,
      calendarEvent,
    );
    return response.status(HttpStatus.OK).json(updatedCalendarEvent);
  }

  @Delete('/:id')
  async delete(@Res() response, @Param('id') id) {
    const deletedCalendarEvent = await this.calendarEventService.delete(id);
    return response.status(HttpStatus.OK).json(deletedCalendarEvent);
  }
}
