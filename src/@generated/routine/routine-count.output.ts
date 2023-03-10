import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RoutineCount {

    @Field(() => Int, {nullable:false})
    habits?: number;
}
