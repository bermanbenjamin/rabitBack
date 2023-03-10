import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitPlantUpdateInput } from './habit-plant-update.input';
import { Type } from 'class-transformer';
import { HabitPlantWhereUniqueInput } from './habit-plant-where-unique.input';

@ArgsType()
export class UpdateOneHabitPlantArgs {

    @Field(() => HabitPlantUpdateInput, {nullable:false})
    @Type(() => HabitPlantUpdateInput)
    data!: HabitPlantUpdateInput;

    @Field(() => HabitPlantWhereUniqueInput, {nullable:false})
    @Type(() => HabitPlantWhereUniqueInput)
    where!: HabitPlantWhereUniqueInput;
}
