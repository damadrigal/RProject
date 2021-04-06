import {Field, InputType } from "type-graphql";
import { StateTypes, User } from "../../entities/user";


@InputType()
export class ProductInput {
    @Field()
    name!: string
    
    @Field()
    images!: String;
 
    @Field()
    createdAt!:string;

    @Field()
    updateAt!:string;

    @Field()
    state!: StateTypes;

    @Field()
    User!: User;

}