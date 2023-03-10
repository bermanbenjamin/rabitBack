import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoutineWhereInput } from './routine-where.input';

@InputType()
export class RoutineListRelationFilter {

    @Field(() => RoutineWhereInput, {nullable:true})
    every?: RoutineWhereInput;

    @Field(() => RoutineWhereInput, {nullable:true})
    some?: RoutineWhereInput;

    @Field(() => RoutineWhereInput, {nullable:true})
    none?: RoutineWhereInput;
}
