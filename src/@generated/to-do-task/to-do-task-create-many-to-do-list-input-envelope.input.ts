import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoTaskCreateManyToDoListInput } from './to-do-task-create-many-to-do-list.input';
import { Type } from 'class-transformer';

@InputType()
export class ToDoTaskCreateManyToDoListInputEnvelope {

    @Field(() => [ToDoTaskCreateManyToDoListInput], {nullable:false})
    @Type(() => ToDoTaskCreateManyToDoListInput)
    data!: Array<ToDoTaskCreateManyToDoListInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
