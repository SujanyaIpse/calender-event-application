import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { EventMedia } from './event-media.entity';  // Import EventMedia entity

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  date: string;  // ISO 8601 format or whatever format suits your needs

  @OneToMany(() => EventMedia, (eventMedia) => eventMedia.event, { cascade: true })
  eventMedia: EventMedia[];  // One-to-many relation with EventMedia
}
