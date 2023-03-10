import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoutineCreateWithoutHabitsInput } from './routine-create-without-habits.input';
import { Type } from 'class-transformer';
import { RoutineCreateOrConnectWithoutHabitsInput } from './routine-create-or-connect-without-habits.input';
import { RoutineUpsertWithoutHabitsInput } from './routine-upsert-without-habits.input';
import { RoutineWhereUniqueInput } from './routine-where-unique.input';
import { RoutineUpdateWithoutHabitsInput } from './routine-update-without-habits.input';

@InputType()
export class RoutineUpdateOneWithoutHabitsNestedInput {

    @Field(() => RoutineCreateWithoutHabitsInput, {nullable:true})
    @Type(() => RoutineCreateWithoutHabitsInput)
    create?: RoutineCreateWithoutHabitsInput;

    @Field(() => RoutineCreateOrConnectWithoutHabitsInput, {nullable:true})
    @Type(() => RoutineCreateOrConnectWithoutHabitsInput)
    connectOrCreate?: RoutineCreateOrConnectWithoutHabitsInput;

    @Field(() => RoutineUpsertWithoutHabitsInput, {nullable:true})
    @Type(() => RoutineUpsertWithoutHabitsInput)
    upsert?: RoutineUpsertWithoutHabitsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => RoutineWhereUniqueInput, {nullable:true})
    @Type(() => RoutineWhereUniqueInput)
    connect?: RoutineWhereUniqueInput;

    @Field(() => RoutineUpdateWithoutHabitsInput, {nullable:true})
    @Type(() => RoutineUpdateWithoutHabitsInput)
    update?: RoutineUpdateWithoutHabitsInput;
}
