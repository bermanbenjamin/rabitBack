import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitPlantCreateInput } from './habit-plant-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneHabitPlantArgs {

    @Field(() => HabitPlantCreateInput, {nullable:false})
    @Type(() => HabitPlantCreateInput)
    data!: HabitPlantCreateInput;
}
