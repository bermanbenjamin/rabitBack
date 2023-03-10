import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitPlantWhereInput } from './habit-plant-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyHabitPlantArgs {

    @Field(() => HabitPlantWhereInput, {nullable:true})
    @Type(() => HabitPlantWhereInput)
    where?: HabitPlantWhereInput;
}
