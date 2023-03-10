import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitCreateNestedOneWithoutTimerInput } from '../habit/habit-create-nested-one-without-timer.input';

@InputType()
export class HabitTimerCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => HabitCreateNestedOneWithoutTimerInput, {nullable:true})
    habit?: HabitCreateNestedOneWithoutTimerInput;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => Date, {nullable:true})
    time?: Date | string;
}
