import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn, BaseEntity } from "typeorm";
import { ObjectType, Field, ID, Authorized, registerEnumType } from "type-graphql";

export enum RolesTypes {
    NONE = "",
    ADMIN = "ADMIN",
    MODERATOR = "MODERATOR",
    BASIC = "BASIC"
}

export enum StateTypes {
    ACTIVE = "ACTIVE",
    DISABLE = "DISABLE"
}

registerEnumType(RolesTypes, {
    name: "RolesTypes",
    description: "Roles types of the application",
    valuesConfig: {
        BASIC: {
            description: "Basic user role",
            deprecationReason: "Replaced with @Authorized() for simplicity",
        },
        MODERATOR: {
            description: "Moderator user role",
        },
        ADMIN: {
            description: "Admin user role",
        },
    },
});

@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @Authorized()
    @Field(() => String)
    @Column("text", { nullable: true })
    name!: string;

    @Authorized([RolesTypes.ADMIN, RolesTypes.MODERATOR])
    @Field(() => String)
    @Column("text", { nullable: true })
    notes!: string;

    @Field(() => String)
    @Column("text", { nullable: true })
    email!: string;

    @Column("text", { nullable: true })
    password!: string;

    @Authorized(RolesTypes.ADMIN)
    @Field(type => RolesTypes)
    @Column("text", { nullable: true })
    role!: RolesTypes;

    @Authorized(RolesTypes.ADMIN)
    @Field(()=> String)
    @CreateDateColumn({type:'timestamp'})
    createdAt!:string;

    @Authorized(RolesTypes.ADMIN)
    @Field(()=> String)
    @CreateDateColumn({type:'timestamp'})
    updateAt!:string;

    @Authorized(RolesTypes.ADMIN)
    @Field(type => StateTypes)
    @Column("text", { nullable: true })
    state!: StateTypes;
}