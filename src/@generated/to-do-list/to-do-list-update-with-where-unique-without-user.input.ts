import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ToDoListWhereUniqueInput } from './to-do-list-where-unique.input';
import { Type } from 'class-transformer';
import { ToDoListUpdateWithoutUserInput } from './to-do-list-update-without-user.input';

@InputType()
export class ToDoListUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => ToDoListWhereUniqueInput, {nullable:false})
    @Type(() => ToDoListWhereUniqueInput)
    where!: ToDoListWhereUniqueInput;

    @Field(() => ToDoListUpdateWithoutUserInput, {nullable:false})
    @Type(() => ToDoListUpdateWithoutUserInput)
    data!: ToDoListUpdateWithoutUserInput;
}
