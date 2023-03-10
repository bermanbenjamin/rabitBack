import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoutineCreateWithoutHabitsInput } from './routine-create-without-habits.input';
import { Type } from 'class-transformer';
import { RoutineCreateOrConnectWithoutHabitsInput } from './routine-create-or-connect-without-habits.input';
import { RoutineWhereUniqueInput } from './routine-where-unique.input';

@InputType()
export class RoutineCreateNestedOneWithoutHabitsInput {

    @Field(() => RoutineCreateWithoutHabitsInput, {nullable:true})
    @Type(() => RoutineCreateWithoutHabitsInput)
    create?: RoutineCreateWithoutHabitsInput;

    @Field(() => RoutineCreateOrConnectWithoutHabitsInput, {nullable:true})
    @Type(() => RoutineCreateOrConnectWithoutHabitsInput)
    connectOrCreate?: RoutineCreateOrConnectWithoutHabitsInput;

    @Field(() => RoutineWhereUniqueInput, {nullable:true})
    @Type(() => RoutineWhereUniqueInput)
    connect?: RoutineWhereUniqueInput;
}
