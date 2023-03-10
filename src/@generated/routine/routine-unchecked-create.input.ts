import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitUncheckedCreateNestedManyWithoutRoutineInput } from '../habit/habit-unchecked-create-nested-many-without-routine.input';

@InputType()
export class RoutineUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isDeleted?: boolean;

    @Field(() => HabitUncheckedCreateNestedManyWithoutRoutineInput, {nullable:true})
    habits?: HabitUncheckedCreateNestedManyWithoutRoutineInput;
}
