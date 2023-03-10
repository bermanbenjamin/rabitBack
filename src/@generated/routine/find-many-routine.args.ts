import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoutineWhereInput } from './routine-where.input';
import { Type } from 'class-transformer';
import { RoutineOrderByWithRelationInput } from './routine-order-by-with-relation.input';
import { RoutineWhereUniqueInput } from './routine-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RoutineScalarFieldEnum } from './routine-scalar-field.enum';

@ArgsType()
export class FindManyRoutineArgs {

    @Field(() => RoutineWhereInput, {nullable:true})
    @Type(() => RoutineWhereInput)
    where?: RoutineWhereInput;

    @Field(() => [RoutineOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RoutineOrderByWithRelationInput>;

    @Field(() => RoutineWhereUniqueInput, {nullable:true})
    cursor?: RoutineWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RoutineScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RoutineScalarFieldEnum>;
}
