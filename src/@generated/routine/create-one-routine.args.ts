import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoutineCreateInput } from './routine-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneRoutineArgs {

    @Field(() => RoutineCreateInput, {nullable:false})
    @Type(() => RoutineCreateInput)
    data!: RoutineCreateInput;
}
