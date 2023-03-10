import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class HabitReminderScalarWhereInput {

    @Field(() => [HabitReminderScalarWhereInput], {nullable:true})
    AND?: Array<HabitReminderScalarWhereInput>;

    @Field(() => [HabitReminderScalarWhereInput], {nullable:true})
    OR?: Array<HabitReminderScalarWhereInput>;

    @Field(() => [HabitReminderScalarWhereInput], {nullable:true})
    NOT?: Array<HabitReminderScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    habitId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    date?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    isAlarm?: BoolFilter;
}
