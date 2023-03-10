import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitPlantWhereInput } from './habit-plant-where.input';
import { Type } from 'class-transformer';
import { HabitPlantOrderByWithRelationInput } from './habit-plant-order-by-with-relation.input';
import { HabitPlantWhereUniqueInput } from './habit-plant-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HabitPlantScalarFieldEnum } from './habit-plant-scalar-field.enum';

@ArgsType()
export class FindFirstHabitPlantArgs {

    @Field(() => HabitPlantWhereInput, {nullable:true})
    @Type(() => HabitPlantWhereInput)
    where?: HabitPlantWhereInput;

    @Field(() => [HabitPlantOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HabitPlantOrderByWithRelationInput>;

    @Field(() => HabitPlantWhereUniqueInput, {nullable:true})
    cursor?: HabitPlantWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [HabitPlantScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof HabitPlantScalarFieldEnum>;
}
