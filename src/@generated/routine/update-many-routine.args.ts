import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoutineUpdateManyMutationInput } from './routine-update-many-mutation.input';
import { Type } from 'class-transformer';
import { RoutineWhereInput } from './routine-where.input';

@ArgsType()
export class UpdateManyRoutineArgs {

    @Field(() => RoutineUpdateManyMutationInput, {nullable:false})
    @Type(() => RoutineUpdateManyMutationInput)
    data!: RoutineUpdateManyMutationInput;

    @Field(() => RoutineWhereInput, {nullable:true})
    @Type(() => RoutineWhereInput)
    where?: RoutineWhereInput;
}
