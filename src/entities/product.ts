import {Entity, Column, PrimaryGeneratedColumn,BaseEntity, CreateDateColumn} from 'typeorm';
import { Field, Int, ObjectType } from "type-graphql";
import {User,StateTypes} from './user'

@ObjectType()
@Entity()
export class Product extends BaseEntity{
    @Field()
    @PrimaryGeneratedColumn()
    id!:number;
   
    @Field(type => String)
    @Column("text", { nullable: true })
    images!: String;

    @Field(() => String)
    @Column("text", { nullable: true })
    name!: string;

    @Field(type => User)
    @Column("text", { nullable: true })
    role!: User;
 
    @Field(()=> String)
    @CreateDateColumn({type:'timestamp'})
    createdAt!:string;

    @Field(()=> String)
    @CreateDateColumn({type:'timestamp'})
    updateAt!:string;

    @Field(type => StateTypes)
    @Column("text", { nullable: true })
    state!: StateTypes;
}