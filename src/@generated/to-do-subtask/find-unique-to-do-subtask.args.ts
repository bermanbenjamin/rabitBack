import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToDoSubtaskWhereUniqueInput } from './to-do-subtask-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueToDoSubtaskArgs {

    @Field(() => ToDoSubtaskWhereUniqueInput, {nullable:false})
    @Type(() => ToDoSubtaskWhereUniqueInput)
    where!: ToDoSubtaskWhereUniqueInput;
}
