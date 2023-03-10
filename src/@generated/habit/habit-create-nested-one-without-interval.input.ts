import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitCreateWithoutIntervalInput } from './habit-create-without-interval.input';
import { Type } from 'class-transformer';
import { HabitCreateOrConnectWithoutIntervalInput } from './habit-create-or-connect-without-interval.input';
import { HabitWhereUniqueInput } from './habit-where-unique.input';

@InputType()
export class HabitCreateNestedOneWithoutIntervalInput {

    @Field(() => HabitCreateWithoutIntervalInput, {nullable:true})
    @Type(() => HabitCreateWithoutIntervalInput)
    create?: HabitCreateWithoutIntervalInput;

    @Field(() => HabitCreateOrConnectWithoutIntervalInput, {nullable:true})
    @Type(() => HabitCreateOrConnectWithoutIntervalInput)
    connectOrCreate?: HabitCreateOrConnectWithoutIntervalInput;

    @Field(() => HabitWhereUniqueInput, {nullable:true})
    @Type(() => HabitWhereUniqueInput)
    connect?: HabitWhereUniqueInput;
}
