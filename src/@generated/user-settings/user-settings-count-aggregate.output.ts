import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserSettingsCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    isOnVacation!: number;

    @Field(() => Int, {nullable:false})
    isWithoutAlarms!: number;

    @Field(() => Int, {nullable:false})
    weekStartsOn!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
