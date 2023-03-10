import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToDoTaskWhereUniqueInput } from './to-do-task-where-unique.input';
import { Type } from 'class-transformer';
import { ToDoTaskCreateInput } from './to-do-task-create.input';
import { ToDoTaskUpdateInput } from './to-do-task-update.input';

@ArgsType()
export class UpsertOneToDoTaskArgs {

    @Field(() => ToDoTaskWhereUniqueInput, {nullable:false})
    @Type(() => ToDoTaskWhereUniqueInput)
    where!: ToDoTaskWhereUniqueInput;

    @Field(() => ToDoTaskCreateInput, {nullable:false})
    @Type(() => ToDoTaskCreateInput)
    create!: ToDoTaskCreateInput;

    @Field(() => ToDoTaskUpdateInput, {nullable:false})
    @Type(() => ToDoTaskUpdateInput)
    update!: ToDoTaskUpdateInput;
}
