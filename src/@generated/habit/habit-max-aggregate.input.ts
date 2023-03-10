import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class HabitMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    routineId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    frequencyPerDay?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    isPaused?: true;

    @Field(() => Boolean, {nullable:true})
    lastPlantReward?: true;

    @Field(() => Boolean, {nullable:true})
    isDeleted?: true;

    @Field(() => Boolean, {nullable:true})
    habitPlantId?: true;

    @Field(() => Boolean, {nullable:true})
    habitTimerId?: true;

    @Field(() => Boolean, {nullable:true})
    habitIntervalId?: true;

    @Field(() => Boolean, {nullable:true})
    color?: true;

    @Field(() => Boolean, {nullable:true})
    icon?: true;

    @Field(() => Boolean, {nullable:true})
    period?: true;
}
