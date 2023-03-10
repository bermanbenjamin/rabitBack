import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitCreateWithoutHistoryInput } from './habit-create-without-history.input';
import { Type } from 'class-transformer';
import { HabitCreateOrConnectWithoutHistoryInput } from './habit-create-or-connect-without-history.input';
import { HabitWhereUniqueInput } from './habit-where-unique.input';

@InputType()
export class HabitCreateNestedOneWithoutHistoryInput {

    @Field(() => HabitCreateWithoutHistoryInput, {nullable:true})
    @Type(() => HabitCreateWithoutHistoryInput)
    create?: HabitCreateWithoutHistoryInput;

    @Field(() => HabitCreateOrConnectWithoutHistoryInput, {nullable:true})
    @Type(() => HabitCreateOrConnectWithoutHistoryInput)
    connectOrCreate?: HabitCreateOrConnectWithoutHistoryInput;

    @Field(() => HabitWhereUniqueInput, {nullable:true})
    @Type(() => HabitWhereUniqueInput)
    connect?: HabitWhereUniqueInput;
}
