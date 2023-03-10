import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class HabitPlantCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    positionBot?: true;

    @Field(() => Boolean, {nullable:true})
    positionLeft?: true;

    @Field(() => Boolean, {nullable:true})
    plant?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
