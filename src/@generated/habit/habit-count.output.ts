import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class HabitCount {

    @Field(() => Int, {nullable:false})
    history?: number;

    @Field(() => Int, {nullable:false})
    reminder?: number;
}
