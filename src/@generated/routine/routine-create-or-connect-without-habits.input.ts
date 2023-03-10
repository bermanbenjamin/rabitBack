import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoutineWhereUniqueInput } from './routine-where-unique.input';
import { Type } from 'class-transformer';
import { RoutineCreateWithoutHabitsInput } from './routine-create-without-habits.input';

@InputType()
export class RoutineCreateOrConnectWithoutHabitsInput {

    @Field(() => RoutineWhereUniqueInput, {nullable:false})
    @Type(() => RoutineWhereUniqueInput)
    where!: RoutineWhereUniqueInput;

    @Field(() => RoutineCreateWithoutHabitsInput, {nullable:false})
    @Type(() => RoutineCreateWithoutHabitsInput)
    create!: RoutineCreateWithoutHabitsInput;
}
