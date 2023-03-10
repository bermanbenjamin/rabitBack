import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitHistoryDayWhereInput } from './habit-history-day-where.input';
import { Type } from 'class-transformer';
import { HabitHistoryDayOrderByWithRelationInput } from './habit-history-day-order-by-with-relation.input';
import { HabitHistoryDayWhereUniqueInput } from './habit-history-day-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HabitHistoryDayScalarFieldEnum } from './habit-history-day-scalar-field.enum';

@ArgsType()
export class FindManyHabitHistoryDayArgs {

    @Field(() => HabitHistoryDayWhereInput, {nullable:true})
    @Type(() => HabitHistoryDayWhereInput)
    where?: HabitHistoryDayWhereInput;

    @Field(() => [HabitHistoryDayOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HabitHistoryDayOrderByWithRelationInput>;

    @Field(() => HabitHistoryDayWhereUniqueInput, {nullable:true})
    cursor?: HabitHistoryDayWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [HabitHistoryDayScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof HabitHistoryDayScalarFieldEnum>;
}
