import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoutineWhereInput } from './routine-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyRoutineArgs {

    @Field(() => RoutineWhereInput, {nullable:true})
    @Type(() => RoutineWhereInput)
    where?: RoutineWhereInput;
}
