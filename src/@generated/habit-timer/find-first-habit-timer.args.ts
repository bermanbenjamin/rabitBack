import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitTimerWhereInput } from './habit-timer-where.input';
import { Type } from 'class-transformer';
import { HabitTimerOrderByWithRelationInput } from './habit-timer-order-by-with-relation.input';
import { HabitTimerWhereUniqueInput } from './habit-timer-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HabitTimerScalarFieldEnum } from './habit-timer-scalar-field.enum';

@ArgsType()
export class FindFirstHabitTimerArgs {

    @Field(() => HabitTimerWhereInput, {nullable:true})
    @Type(() => HabitTimerWhereInput)
    where?: HabitTimerWhereInput;

    @Field(() => [HabitTimerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HabitTimerOrderByWithRelationInput>;

    @Field(() => HabitTimerWhereUniqueInput, {nullable:true})
    cursor?: HabitTimerWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [HabitTimerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof HabitTimerScalarFieldEnum>;
}
