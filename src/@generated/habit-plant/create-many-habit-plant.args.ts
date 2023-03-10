import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HabitPlantCreateManyInput } from './habit-plant-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyHabitPlantArgs {

    @Field(() => [HabitPlantCreateManyInput], {nullable:false})
    @Type(() => HabitPlantCreateManyInput)
    data!: Array<HabitPlantCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
