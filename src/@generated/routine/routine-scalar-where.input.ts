import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class RoutineScalarWhereInput {

    @Field(() => [RoutineScalarWhereInput], {nullable:true})
    AND?: Array<RoutineScalarWhereInput>;

    @Field(() => [RoutineScalarWhereInput], {nullable:true})
    OR?: Array<RoutineScalarWhereInput>;

    @Field(() => [RoutineScalarWhereInput], {nullable:true})
    NOT?: Array<RoutineScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

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
}
