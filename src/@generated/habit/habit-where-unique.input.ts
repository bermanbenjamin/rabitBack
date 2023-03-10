import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class HabitWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    habitPlantId?: string;

    @Field(() => String, {nullable:true})
    habitTimerId?: string;

    @Field(() => String, {nullable:true})
    habitIntervalId?: string;
}
