import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitPlantUpdateManyMutationInput } from './habit-plant-update-many-mutation.input';
import { Type } from 'class-transformer';
import { HabitPlantWhereInput } from './habit-plant-where.input';

@ArgsType()
export class UpdateManyHabitPlantArgs {

    @Field(() => HabitPlantUpdateManyMutationInput, {nullable:false})
    @Type(() => HabitPlantUpdateManyMutationInput)
    data!: HabitPlantUpdateManyMutationInput;

    @Field(() => HabitPlantWhereInput, {nullable:true})
    @Type(() => HabitPlantWhereInput)
    where?: HabitPlantWhereInput;
}
