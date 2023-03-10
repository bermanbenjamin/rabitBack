import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoListCreateManyUserInput } from './to-do-list-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ToDoListCreateManyUserInputEnvelope {

    @Field(() => [ToDoListCreateManyUserInput], {nullable:false})
    @Type(() => ToDoListCreateManyUserInput)
    data!: Array<ToDoListCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
