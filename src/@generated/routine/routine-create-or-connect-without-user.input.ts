import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoutineWhereUniqueInput } from './routine-where-unique.input';
import { Type } from 'class-transformer';
import { RoutineCreateWithoutUserInput } from './routine-create-without-user.input';

@InputType()
export class RoutineCreateOrConnectWithoutUserInput {

    @Field(() => RoutineWhereUniqueInput, {nullable:false})
    @Type(() => RoutineWhereUniqueInput)
    where!: RoutineWhereUniqueInput;

    @Field(() => RoutineCreateWithoutUserInput, {nullable:false})
    @Type(() => RoutineCreateWithoutUserInput)
    create!: RoutineCreateWithoutUserInput;
}
