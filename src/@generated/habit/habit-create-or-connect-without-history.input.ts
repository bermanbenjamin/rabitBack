import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitWhereUniqueInput } from './habit-where-unique.input';
import { Type } from 'class-transformer';
import { HabitCreateWithoutHistoryInput } from './habit-create-without-history.input';

@InputType()
export class HabitCreateOrConnectWithoutHistoryInput {

    @Field(() => HabitWhereUniqueInput, {nullable:false})
    @Type(() => HabitWhereUniqueInput)
    where!: HabitWhereUniqueInput;

    @Field(() => HabitCreateWithoutHistoryInput, {nullable:false})
    @Type(() => HabitCreateWithoutHistoryInput)
    create!: HabitCreateWithoutHistoryInput;
}
