import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  parentId: number | null;

  @Column()
  level: number;

  @ManyToOne(() => Location, location => location.children)
  parent: Location;

  @OneToMany(() => Location, location => location.parent)
  children: Location[]}
