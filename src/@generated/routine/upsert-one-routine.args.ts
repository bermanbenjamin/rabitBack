import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoutineWhereUniqueInput } from './routine-where-unique.input';
import { Type } from 'class-transformer';
import { RoutineCreateInput } from './routine-create.input';
import { RoutineUpdateInput } from './routine-update.input';

@ArgsType()
export class UpsertOneRoutineArgs {

    @Field(() => RoutineWhereUniqueInput, {nullable:false})
    @Type(() => RoutineWhereUniqueInput)
    where!: RoutineWhereUniqueInput;

    @Field(() => RoutineCreateInput, {nullable:false})
    @Type(() => RoutineCreateInput)
    create!: RoutineCreateInput;

    @Field(() => RoutineUpdateInput, {nullable:false})
    @Type(() => RoutineUpdateInput)
    update!: RoutineUpdateInput;
}
