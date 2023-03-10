import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitIntervalCreateWithoutHabitInput } from './habit-interval-create-without-habit.input';
import { HabitIntervalCreateOrConnectWithoutHabitInput } from './habit-interval-create-or-connect-without-habit.input';
import { HabitIntervalUpsertWithoutHabitInput } from './habit-interval-upsert-without-habit.input';
import { HabitIntervalWhereUniqueInput } from './habit-interval-where-unique.input';
import { HabitIntervalUpdateWithoutHabitInput } from './habit-interval-update-without-habit.input';

@InputType()
export class HabitIntervalUpdateOneRequiredWithoutHabitInput {

    @Field(() => HabitIntervalCreateWithoutHabitInput, {nullable:true})
    create?: HabitIntervalCreateWithoutHabitInput;

    @Field(() => HabitIntervalCreateOrConnectWithoutHabitInput, {nullable:true})
    connectOrCreate?: HabitIntervalCreateOrConnectWithoutHabitInput;

    @Field(() => HabitIntervalUpsertWithoutHabitInput, {nullable:true})
    upsert?: HabitIntervalUpsertWithoutHabitInput;

    @Field(() => HabitIntervalWhereUniqueInput, {nullable:true})
    connect?: HabitIntervalWhereUniqueInput;

    @Field(() => HabitIntervalUpdateWithoutHabitInput, {nullable:true})
    update?: HabitIntervalUpdateWithoutHabitInput;
}
