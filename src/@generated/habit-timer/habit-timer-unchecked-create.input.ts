import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitUncheckedCreateNestedOneWithoutTimerInput } from '../habit/habit-unchecked-create-nested-one-without-timer.input';

@InputType()
export class HabitTimerUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => HabitUncheckedCreateNestedOneWithoutTimerInput, {nullable:true})
    habit?: HabitUncheckedCreateNestedOneWithoutTimerInput;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => Date, {nullable:true})
    time?: Date | string;
}
