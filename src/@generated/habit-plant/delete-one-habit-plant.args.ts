import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitPlantWhereUniqueInput } from './habit-plant-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneHabitPlantArgs {

    @Field(() => HabitPlantWhereUniqueInput, {nullable:false})
    @Type(() => HabitPlantWhereUniqueInput)
    where!: HabitPlantWhereUniqueInput;
}
