import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitWhereUniqueInput } from './habit-where-unique.input';
import { Type } from 'class-transformer';
import { HabitCreateWithoutIntervalInput } from './habit-create-without-interval.input';

@InputType()
export class HabitCreateOrConnectWithoutIntervalInput {

    @Field(() => HabitWhereUniqueInput, {nullable:false})
    @Type(() => HabitWhereUniqueInput)
    where!: HabitWhereUniqueInput;

    @Field(() => HabitCreateWithoutIntervalInput, {nullable:false})
    @Type(() => HabitCreateWithoutIntervalInput)
    create!: HabitCreateWithoutIntervalInput;
}
