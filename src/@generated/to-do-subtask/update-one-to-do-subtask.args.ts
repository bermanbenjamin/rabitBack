import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToDoSubtaskUpdateInput } from './to-do-subtask-update.input';
import { Type } from 'class-transformer';
import { ToDoSubtaskWhereUniqueInput } from './to-do-subtask-where-unique.input';

@ArgsType()
export class UpdateOneToDoSubtaskArgs {

    @Field(() => ToDoSubtaskUpdateInput, {nullable:false})
    @Type(() => ToDoSubtaskUpdateInput)
    data!: ToDoSubtaskUpdateInput;

    @Field(() => ToDoSubtaskWhereUniqueInput, {nullable:false})
    @Type(() => ToDoSubtaskWhereUniqueInput)
    where!: ToDoSubtaskWhereUniqueInput;
}
