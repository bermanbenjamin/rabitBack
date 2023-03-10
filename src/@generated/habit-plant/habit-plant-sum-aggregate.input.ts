import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class HabitPlantSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    positionBot?: true;

    @Field(() => Boolean, {nullable:true})
    positionLeft?: true;
}
