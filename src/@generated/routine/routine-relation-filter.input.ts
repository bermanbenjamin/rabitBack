import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoutineWhereInput } from './routine-where.input';

@InputType()
export class RoutineRelationFilter {

    @Field(() => RoutineWhereInput, {nullable:true})
    is?: RoutineWhereInput;

    @Field(() => RoutineWhereInput, {nullable:true})
    isNot?: RoutineWhereInput;
}
