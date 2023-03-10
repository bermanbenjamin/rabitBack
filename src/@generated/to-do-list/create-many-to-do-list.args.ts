import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToDoListCreateManyInput } from './to-do-list-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyToDoListArgs {

    @Field(() => [ToDoListCreateManyInput], {nullable:false})
    @Type(() => ToDoListCreateManyInput)
    data!: Array<ToDoListCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
