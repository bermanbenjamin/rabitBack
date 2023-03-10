import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitPlantWhereInput } from './habit-plant-where.input';

@InputType()
export class HabitPlantRelationFilter {

    @Field(() => HabitPlantWhereInput, {nullable:true})
    is?: HabitPlantWhereInput;

    @Field(() => HabitPlantWhereInput, {nullable:true})
    isNot?: HabitPlantWhereInput;
}
