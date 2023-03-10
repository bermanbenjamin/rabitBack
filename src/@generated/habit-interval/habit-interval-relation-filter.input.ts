import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitIntervalWhereInput } from './habit-interval-where.input';

@InputType()
export class HabitIntervalRelationFilter {

    @Field(() => HabitIntervalWhereInput, {nullable:true})
    is?: HabitIntervalWhereInput;

    @Field(() => HabitIntervalWhereInput, {nullable:true})
    isNot?: HabitIntervalWhereInput;
}
