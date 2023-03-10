import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitWhereUniqueInput } from './habit-where-unique.input';
import { Type } from 'class-transformer';
import { HabitCreateWithoutPlantInput } from './habit-create-without-plant.input';

@InputType()
export class HabitCreateOrConnectWithoutPlantInput {

    @Field(() => HabitWhereUniqueInput, {nullable:false})
    @Type(() => HabitWhereUniqueInput)
    where!: HabitWhereUniqueInput;

    @Field(() => HabitCreateWithoutPlantInput, {nullable:false})
    @Type(() => HabitCreateWithoutPlantInput)
    create!: HabitCreateWithoutPlantInput;
}
