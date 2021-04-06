import {Field, InputType } from "type-graphql";
import { StateTypes, User,RolesTypes } from "../../entities/user";

@InputType({ description: "Editable user information" })
export class UserInput {
    @Field({ nullable: true })
    name?: string

    @Field()
    notes!: string;

    @Field(type => RolesTypes)
    role!: RolesTypes;

    @Field()
    createdAt!:string;

    @Field()
    updateAt!:string;

    @Field()
    state!: StateTypes;
}