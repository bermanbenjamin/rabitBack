import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitReminderWhereInput } from './habit-reminder-where.input';
import { Type } from 'class-transformer';
import { HabitReminderOrderByWithAggregationInput } from './habit-reminder-order-by-with-aggregation.input';
import { HabitReminderScalarFieldEnum } from './habit-reminder-scalar-field.enum';
import { HabitReminderScalarWhereWithAggregatesInput } from './habit-reminder-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { HabitReminderCountAggregateInput } from './habit-reminder-count-aggregate.input';
import { HabitReminderMinAggregateInput } from './habit-reminder-min-aggregate.input';
import { HabitReminderMaxAggregateInput } from './habit-reminder-max-aggregate.input';

@ArgsType()
export class HabitReminderGroupByArgs {

    @Field(() => HabitReminderWhereInput, {nullable:true})
    @Type(() => HabitReminderWhereInput)
    where?: HabitReminderWhereInput;

    @Field(() => [HabitReminderOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<HabitReminderOrderByWithAggregationInput>;

    @Field(() => [HabitReminderScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof HabitReminderScalarFieldEnum>;

    @Field(() => HabitReminderScalarWhereWithAggregatesInput, {nullable:true})
    having?: HabitReminderScalarWhereWithAggregatesInput;

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
