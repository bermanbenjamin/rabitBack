import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ToDoListCount {

    @Field(() => Int, {nullable:false})
    tasks?: number;
}
