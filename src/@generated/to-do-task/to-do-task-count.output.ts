import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ToDoTaskCount {

    @Field(() => Int, {nullable:false})
    subTasks?: number;
}
