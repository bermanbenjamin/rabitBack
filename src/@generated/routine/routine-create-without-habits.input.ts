import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutRoutinesInput } from '../user/user-create-nested-one-without-routines.input';

@InputType()
export class RoutineCreateWithoutHabitsInput {

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
}
