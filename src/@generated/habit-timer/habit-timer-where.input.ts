import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { HabitRelationFilter } from '../habit/habit-relation-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class HabitTimerWhereInput {

    @Field(() => [HabitTimerWhereInput], {nullable:true})
    AND?: Array<HabitTimerWhereInput>;

    @Field(() => [HabitTimerWhereInput], {nullable:true})
    OR?: Array<HabitTimerWhereInput>;

    @Field(() => [HabitTimerWhereInput], {nullable:true})
    NOT?: Array<HabitTimerWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => HabitRelationFilter, {nullable:true})
    habit?: HabitRelationFilter;

    @Field(() => BoolFilter, {nullable:true})
    isActive?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    time?: DateTimeFilter;
}
