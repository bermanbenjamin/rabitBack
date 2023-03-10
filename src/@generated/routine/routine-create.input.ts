import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutRoutinesInput } from '../user/user-create-nested-one-without-routines.input';
import { HabitCreateNestedManyWithoutRoutineInput } from '../habit/habit-create-nested-many-without-routine.input';

@InputType()
export class RoutineCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserCreateNestedOneWithoutRoutinesInput, {nullable:true})
    User?: UserCreateNestedOneWithoutRoutinesInput;

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
