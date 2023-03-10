import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoutineCreateWithoutHabitsInput } from './routine-create-without-habits.input';
import { RoutineCreateOrConnectWithoutHabitsInput } from './routine-create-or-connect-without-habits.input';
import { RoutineUpsertWithoutHabitsInput } from './routine-upsert-without-habits.input';
import { RoutineWhereUniqueInput } from './routine-where-unique.input';
import { RoutineUpdateWithoutHabitsInput } from './routine-update-without-habits.input';

@InputType()
export class RoutineUpdateOneWithoutHabitsInput {

    @Field(() => RoutineCreateWithoutHabitsInput, {nullable:true})
    create?: RoutineCreateWithoutHabitsInput;

    @Field(() => RoutineCreateOrConnectWithoutHabitsInput, {nullable:true})
    connectOrCreate?: RoutineCreateOrConnectWithoutHabitsInput;

    @Field(() => RoutineUpsertWithoutHabitsInput, {nullable:true})
    upsert?: RoutineUpsertWithoutHabitsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => RoutineWhereUniqueInput, {nullable:true})
    connect?: RoutineWhereUniqueInput;

    @Field(() => RoutineUpdateWithoutHabitsInput, {nullable:true})
    update?: RoutineUpdateWithoutHabitsInput;
}
