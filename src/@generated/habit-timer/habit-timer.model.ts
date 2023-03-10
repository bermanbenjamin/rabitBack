import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Habit } from '../habit/habit.model';

@ObjectType()
export class HabitTimer {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Habit, {nullable:true})
    habit?: Habit | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isActive!: boolean;

    @Field(() => Date, {nullable:false})
    time!: Date;
}
