import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitIntervalWhereInput } from './habit-interval-where.input';
import { Type } from 'class-transformer';
import { HabitIntervalOrderByWithRelationInput } from './habit-interval-order-by-with-relation.input';
import { HabitIntervalWhereUniqueInput } from './habit-interval-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HabitIntervalScalarFieldEnum } from './habit-interval-scalar-field.enum';

@ArgsType()
export class FindManyHabitIntervalArgs {

    @Field(() => HabitIntervalWhereInput, {nullable:true})
    @Type(() => HabitIntervalWhereInput)
    where?: HabitIntervalWhereInput;

    @Field(() => [HabitIntervalOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HabitIntervalOrderByWithRelationInput>;

    @Field(() => HabitIntervalWhereUniqueInput, {nullable:true})
    cursor?: HabitIntervalWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [HabitIntervalScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof HabitIntervalScalarFieldEnum>;
}
