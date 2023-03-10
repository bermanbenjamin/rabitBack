import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitCreateNestedManyWithoutRoutineInput } from '../habit/habit-create-nested-many-without-routine.input';

@InputType()
export class RoutineCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isDeleted?: boolean;

    @Field(() => HabitCreateNestedManyWithoutRoutineInput, {nullable:true})
    habits?: HabitCreateNestedManyWithoutRoutineInput;
}
