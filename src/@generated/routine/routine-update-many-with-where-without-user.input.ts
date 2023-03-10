import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoutineScalarWhereInput } from './routine-scalar-where.input';
import { Type } from 'class-transformer';
import { RoutineUpdateManyMutationInput } from './routine-update-many-mutation.input';

@InputType()
export class RoutineUpdateManyWithWhereWithoutUserInput {

    @Field(() => RoutineScalarWhereInput, {nullable:false})
    @Type(() => RoutineScalarWhereInput)
    where!: RoutineScalarWhereInput;

    @Field(() => RoutineUpdateManyMutationInput, {nullable:false})
    @Type(() => RoutineUpdateManyMutationInput)
    data!: RoutineUpdateManyMutationInput;
}
