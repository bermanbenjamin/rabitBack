import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitWhereUniqueInput } from './habit-where-unique.input';
import { Type } from 'class-transformer';
import { HabitUpdateWithoutRoutineInput } from './habit-update-without-routine.input';

@InputType()
export class HabitUpdateWithWhereUniqueWithoutRoutineInput {

    @Field(() => HabitWhereUniqueInput, {nullable:false})
    @Type(() => HabitWhereUniqueInput)
    where!: HabitWhereUniqueInput;

    @Field(() => HabitUpdateWithoutRoutineInput, {nullable:false})
    @Type(() => HabitUpdateWithoutRoutineInput)
    data!: HabitUpdateWithoutRoutineInput;
}
