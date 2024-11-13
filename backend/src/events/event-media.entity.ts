import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Event } from './event.entity';  // Import Event entity

@Entity()
export class EventMedia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;  // Type can be 'image', 'video', etc.

  @Column()
  path: string;  // Path to the media file

  @ManyToOne(() => Event, (event) => event.eventMedia, { onDelete: 'CASCADE' })
  event: Event;  // Many-to-one relation to Event
}
