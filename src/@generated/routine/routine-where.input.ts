import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { HabitListRelationFilter } from '../habit/habit-list-relation-filter.input';

@InputType()
export class RoutineWhereInput {

    @Field(() => [RoutineWhereInput], {nullable:true})
    AND?: Array<RoutineWhereInput>;

    @Field(() => [RoutineWhereInput], {nullable:true})
    OR?: Array<RoutineWhereInput>;

    @Field(() => [RoutineWhereInput], {nullable:true})
    NOT?: Array<RoutineWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    User?: UserRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    isDeleted?: BoolFilter;

    @Field(() => HabitListRelationFilter, {nullable:true})
    habits?: HabitListRelationFilter;
}
