import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoutineUpdateWithoutHabitsInput } from './routine-update-without-habits.input';
import { Type } from 'class-transformer';
import { RoutineCreateWithoutHabitsInput } from './routine-create-without-habits.input';

@InputType()
export class RoutineUpsertWithoutHabitsInput {

    @Field(() => RoutineUpdateWithoutHabitsInput, {nullable:false})
    @Type(() => RoutineUpdateWithoutHabitsInput)
    update!: RoutineUpdateWithoutHabitsInput;

    @Field(() => RoutineCreateWithoutHabitsInput, {nullable:false})
    @Type(() => RoutineCreateWithoutHabitsInput)
    create!: RoutineCreateWithoutHabitsInput;
}
