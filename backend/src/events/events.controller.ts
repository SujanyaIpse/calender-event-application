import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EventsService } from './event.service';
import { Event } from './event.entity';  // Assuming Event entity still exists

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  // Get all events
  @Get()
  getAllEvents(): Event[] {
    return this.eventsService.getAllEvents();
  }

  // Get event by id
  @Get(':id')
  getEventById(@Param('id') id: number): Event {
    return this.eventsService.getEventById(id);
  }

  // Create a new event
  @Post()
  createEvent(@Body() event: Event): Event {
    return this.eventsService.createEvent(event);
  }

  // Update an event by id
  @Put(':id')
  updateEvent(@Param('id') id: number, @Body() updatedEvent: Event): Event {
    return this.eventsService.updateEvent(id, updatedEvent);
  }

  // Delete an event by id
  @Delete(':id')
  deleteEvent(@Param('id') id: number): void {
    this.eventsService.deleteEvent(id);
  }
}
