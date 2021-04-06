import {Entity, Column, PrimaryGeneratedColumn,BaseEntity, CreateDateColumn} from 'typeorm';
import { Field, ObjectType } from "type-graphql";
import { StateTypes } from './user';

@ObjectType()
@Entity()
export class Product extends BaseEntity{
    @Field()
    @PrimaryGeneratedColumn()
    id!:number;

    @Field(() => String)
    @Column("text", { nullable: true })
    urlImage!: string;

    @Field(type => StateTypes)
    @Column("bit", { nullable: false })
    state!: StateTypes;
}