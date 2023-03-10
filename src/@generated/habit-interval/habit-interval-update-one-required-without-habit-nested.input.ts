import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitIntervalCreateWithoutHabitInput } from './habit-interval-create-without-habit.input';
import { Type } from 'class-transformer';
import { HabitIntervalCreateOrConnectWithoutHabitInput } from './habit-interval-create-or-connect-without-habit.input';
import { HabitIntervalUpsertWithoutHabitInput } from './habit-interval-upsert-without-habit.input';
import { HabitIntervalWhereUniqueInput } from './habit-interval-where-unique.input';
import { HabitIntervalUpdateWithoutHabitInput } from './habit-interval-update-without-habit.input';

@InputType()
export class HabitIntervalUpdateOneRequiredWithoutHabitNestedInput {

    @Field(() => HabitIntervalCreateWithoutHabitInput, {nullable:true})
    @Type(() => HabitIntervalCreateWithoutHabitInput)
    create?: HabitIntervalCreateWithoutHabitInput;

    @Field(() => HabitIntervalCreateOrConnectWithoutHabitInput, {nullable:true})
    @Type(() => HabitIntervalCreateOrConnectWithoutHabitInput)
    connectOrCreate?: HabitIntervalCreateOrConnectWithoutHabitInput;

    @Field(() => HabitIntervalUpsertWithoutHabitInput, {nullable:true})
    @Type(() => HabitIntervalUpsertWithoutHabitInput)
    upsert?: HabitIntervalUpsertWithoutHabitInput;

    @Field(() => HabitIntervalWhereUniqueInput, {nullable:true})
    @Type(() => HabitIntervalWhereUniqueInput)
    connect?: HabitIntervalWhereUniqueInput;

    @Field(() => HabitIntervalUpdateWithoutHabitInput, {nullable:true})
    @Type(() => HabitIntervalUpdateWithoutHabitInput)
    update?: HabitIntervalUpdateWithoutHabitInput;
}
