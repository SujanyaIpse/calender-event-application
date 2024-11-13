import { Injectable } from '@nestjs/common';
import { Event } from './event.entity';  // Assuming Event entity still exists

@Injectable()
export class EventsService {
  private events: Event[] = [];  // In-memory storage for events

  // Get all events
  getAllEvents(): Event[] {
    return this.events;
  }

  // Get a specific event by id
  getEventById(id: number): Event {
    return this.events.find(event => event.id === id);
  }

  // Create a new event
  createEvent(event: Event): Event {
    this.events.push(event);
    return event;
  }

  // Update an event by id
  updateEvent(id: number, updatedEvent: Event): Event {
    const index = this.events.findIndex(event => event.id === id);
    if (index === -1) {
      throw new Error('Event not found');
    }
    this.events[index] = updatedEvent;
    return updatedEvent;
  }

  // Delete an event by id
  deleteEvent(id: number): void {
    const index = this.events.findIndex(event => event.id === id);
    if (index === -1) {
      throw new Error('Event not found');
    }
    this.events.splice(index, 1);
  }
}
