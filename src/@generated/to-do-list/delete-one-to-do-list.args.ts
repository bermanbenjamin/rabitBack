import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ToDoListWhereUniqueInput } from './to-do-list-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneToDoListArgs {

    @Field(() => ToDoListWhereUniqueInput, {nullable:false})
    @Type(() => ToDoListWhereUniqueInput)
    where!: ToDoListWhereUniqueInput;
}
