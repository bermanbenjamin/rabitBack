import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToDoTaskWhereUniqueInput } from './to-do-task-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneToDoTaskArgs {

    @Field(() => ToDoTaskWhereUniqueInput, {nullable:false})
    @Type(() => ToDoTaskWhereUniqueInput)
    where!: ToDoTaskWhereUniqueInput;
}
