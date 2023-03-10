import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitWhereUniqueInput } from './habit-where-unique.input';
import { Type } from 'class-transformer';
import { HabitCreateWithoutRoutineInput } from './habit-create-without-routine.input';

@InputType()
export class HabitCreateOrConnectWithoutRoutineInput {

    @Field(() => HabitWhereUniqueInput, {nullable:false})
    @Type(() => HabitWhereUniqueInput)
    where!: HabitWhereUniqueInput;

    @Field(() => HabitCreateWithoutRoutineInput, {nullable:false})
    @Type(() => HabitCreateWithoutRoutineInput)
    create!: HabitCreateWithoutRoutineInput;
}
