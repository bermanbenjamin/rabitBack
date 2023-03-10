import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserSettings {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isOnVacation!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isWithoutAlarms!: boolean;

    @Field(() => Int, {nullable:false,defaultValue:0})
    weekStartsOn!: number;
}
