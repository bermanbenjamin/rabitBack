import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToDoSubtaskCreateManyInput } from './to-do-subtask-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyToDoSubtaskArgs {

    @Field(() => [ToDoSubtaskCreateManyInput], {nullable:false})
    @Type(() => ToDoSubtaskCreateManyInput)
    data!: Array<ToDoSubtaskCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
