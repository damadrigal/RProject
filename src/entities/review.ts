
import {Entity, Column, PrimaryGeneratedColumn,BaseEntity, CreateDateColumn} from 'typeorm';
import { Field, Int, ObjectType } from "type-graphql";
import { Product } from './product';
import { User } from './user';

@ObjectType()
@Entity()
export class Review extends BaseEntity{
    @Field()
    @PrimaryGeneratedColumn()
    id!:number;

    @Field(type => String)
    @Column("text", { nullable: true })
    images!: String;

    @Field(type => User)
    @Column("text", { nullable: true })
    User!: User;

    @Field(type => Product)
    @Column("text", { nullable: true })
    Product!: Product;

    @Field()
    @Column("int", { nullable: true })
    rating!: number;

    @Field(() => String)
    @Column("text", { nullable: true })
    comment!: string;

    @Field(()=> String)
    @CreateDateColumn({type:'timestamp'})
    createdAt!:string;

    @Field(()=> String)
    @CreateDateColumn({type:'timestamp'})
    updateAt!:string;

    @Field(type => Boolean)
    @Column("bit", { nullable: false })
    state!: Boolean;
}