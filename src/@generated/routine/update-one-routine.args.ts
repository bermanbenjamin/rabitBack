import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoutineUpdateInput } from './routine-update.input';
import { Type } from 'class-transformer';
import { RoutineWhereUniqueInput } from './routine-where-unique.input';

@ArgsType()
export class UpdateOneRoutineArgs {

    @Field(() => RoutineUpdateInput, {nullable:false})
    @Type(() => RoutineUpdateInput)
    data!: RoutineUpdateInput;

    @Field(() => RoutineWhereUniqueInput, {nullable:false})
    @Type(() => RoutineWhereUniqueInput)
    where!: RoutineWhereUniqueInput;
}
