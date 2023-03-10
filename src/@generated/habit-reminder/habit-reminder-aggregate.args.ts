import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitReminderWhereInput } from './habit-reminder-where.input';
import { Type } from 'class-transformer';
import { HabitReminderOrderByWithRelationInput } from './habit-reminder-order-by-with-relation.input';
import { HabitReminderWhereUniqueInput } from './habit-reminder-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HabitReminderCountAggregateInput } from './habit-reminder-count-aggregate.input';
import { HabitReminderMinAggregateInput } from './habit-reminder-min-aggregate.input';
import { HabitReminderMaxAggregateInput } from './habit-reminder-max-aggregate.input';

@ArgsType()
export class HabitReminderAggregateArgs {

    @Field(() => HabitReminderWhereInput, {nullable:true})
    @Type(() => HabitReminderWhereInput)
    where?: HabitReminderWhereInput;

    @Field(() => [HabitReminderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HabitReminderOrderByWithRelationInput>;

    @Field(() => HabitReminderWhereUniqueInput, {nullable:true})
    cursor?: HabitReminderWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => HabitReminderCountAggregateInput, {nullable:true})
    _count?: HabitReminderCountAggregateInput;

    @Field(() => HabitReminderMinAggregateInput, {nullable:true})
    _min?: HabitReminderMinAggregateInput;

    @Field(() => HabitReminderMaxAggregateInput, {nullable:true})
    _max?: HabitReminderMaxAggregateInput;
}
