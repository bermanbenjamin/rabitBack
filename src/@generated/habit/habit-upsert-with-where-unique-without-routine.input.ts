import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitWhereUniqueInput } from './habit-where-unique.input';
import { Type } from 'class-transformer';
import { HabitUpdateWithoutRoutineInput } from './habit-update-without-routine.input';
import { HabitCreateWithoutRoutineInput } from './habit-create-without-routine.input';

@InputType()
export class HabitUpsertWithWhereUniqueWithoutRoutineInput {

    @Field(() => HabitWhereUniqueInput, {nullable:false})
    @Type(() => HabitWhereUniqueInput)
    where!: HabitWhereUniqueInput;

    @Field(() => HabitUpdateWithoutRoutineInput, {nullable:false})
    @Type(() => HabitUpdateWithoutRoutineInput)
    update!: HabitUpdateWithoutRoutineInput;

    @Field(() => HabitCreateWithoutRoutineInput, {nullable:false})
    @Type(() => HabitCreateWithoutRoutineInput)
    create!: HabitCreateWithoutRoutineInput;
}
