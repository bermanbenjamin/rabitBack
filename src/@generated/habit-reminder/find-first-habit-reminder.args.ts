import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitReminderWhereInput } from './habit-reminder-where.input';
import { Type } from 'class-transformer';
import { HabitReminderOrderByWithRelationInput } from './habit-reminder-order-by-with-relation.input';
import { HabitReminderWhereUniqueInput } from './habit-reminder-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HabitReminderScalarFieldEnum } from './habit-reminder-scalar-field.enum';

@ArgsType()
export class FindFirstHabitReminderArgs {

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

    @Field(() => [HabitReminderScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof HabitReminderScalarFieldEnum>;
}
