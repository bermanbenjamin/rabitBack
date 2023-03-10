import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToDoTaskUpdateInput } from './to-do-task-update.input';
import { Type } from 'class-transformer';
import { ToDoTaskWhereUniqueInput } from './to-do-task-where-unique.input';

@ArgsType()
export class UpdateOneToDoTaskArgs {

    @Field(() => ToDoTaskUpdateInput, {nullable:false})
    @Type(() => ToDoTaskUpdateInput)
    data!: ToDoTaskUpdateInput;

    @Field(() => ToDoTaskWhereUniqueInput, {nullable:false})
    @Type(() => ToDoTaskWhereUniqueInput)
    where!: ToDoTaskWhereUniqueInput;
}
