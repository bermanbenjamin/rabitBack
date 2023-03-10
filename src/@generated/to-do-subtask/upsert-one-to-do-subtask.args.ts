import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToDoSubtaskWhereUniqueInput } from './to-do-subtask-where-unique.input';
import { Type } from 'class-transformer';
import { ToDoSubtaskCreateInput } from './to-do-subtask-create.input';
import { ToDoSubtaskUpdateInput } from './to-do-subtask-update.input';

@ArgsType()
export class UpsertOneToDoSubtaskArgs {

    @Field(() => ToDoSubtaskWhereUniqueInput, {nullable:false})
    @Type(() => ToDoSubtaskWhereUniqueInput)
    where!: ToDoSubtaskWhereUniqueInput;

    @Field(() => ToDoSubtaskCreateInput, {nullable:false})
    @Type(() => ToDoSubtaskCreateInput)
    create!: ToDoSubtaskCreateInput;

    @Field(() => ToDoSubtaskUpdateInput, {nullable:false})
    @Type(() => ToDoSubtaskUpdateInput)
    update!: ToDoSubtaskUpdateInput;
}
