import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToDoTaskCreateManyInput } from './to-do-task-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyToDoTaskArgs {

    @Field(() => [ToDoTaskCreateManyInput], {nullable:false})
    @Type(() => ToDoTaskCreateManyInput)
    data!: Array<ToDoTaskCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
