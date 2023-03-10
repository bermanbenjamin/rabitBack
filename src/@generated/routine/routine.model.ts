import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Habit } from '../habit/habit.model';
import { RoutineCount } from './routine-count.output';

@ObjectType()
export class Routine {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => User, {nullable:true})
    User?: User | null;

    @Field(() => String, {nullable:true})
    userId!: string | null;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isDeleted!: boolean;

    @Field(() => [Habit], {nullable:true})
    habits?: Array<Habit>;

    @Field(() => RoutineCount, {nullable:false})
    _count?: RoutineCount;
}
