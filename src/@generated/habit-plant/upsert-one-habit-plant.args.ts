import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitPlantWhereUniqueInput } from './habit-plant-where-unique.input';
import { Type } from 'class-transformer';
import { HabitPlantCreateInput } from './habit-plant-create.input';
import { HabitPlantUpdateInput } from './habit-plant-update.input';

@ArgsType()
export class UpsertOneHabitPlantArgs {

    @Field(() => HabitPlantWhereUniqueInput, {nullable:false})
    @Type(() => HabitPlantWhereUniqueInput)
    where!: HabitPlantWhereUniqueInput;

    @Field(() => HabitPlantCreateInput, {nullable:false})
    @Type(() => HabitPlantCreateInput)
    create!: HabitPlantCreateInput;

    @Field(() => HabitPlantUpdateInput, {nullable:false})
    @Type(() => HabitPlantUpdateInput)
    update!: HabitPlantUpdateInput;
}
