import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableListFilter } from '../prisma/int-nullable-list-filter.input';

@InputType()
export class HabitHistoryDayScalarWhereInput {

    @Field(() => [HabitHistoryDayScalarWhereInput], {nullable:true})
    AND?: Array<HabitHistoryDayScalarWhereInput>;

    @Field(() => [HabitHistoryDayScalarWhereInput], {nullable:true})
    OR?: Array<HabitHistoryDayScalarWhereInput>;

    @Field(() => [HabitHistoryDayScalarWhereInput], {nullable:true})
    NOT?: Array<HabitHistoryDayScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    habitId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    date?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    frequencyOnThisDay?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    doneTimes?: IntFilter;

    @Field(() => IntNullableListFilter, {nullable:true})
    secondsPerFrequency?: IntNullableListFilter;
}
