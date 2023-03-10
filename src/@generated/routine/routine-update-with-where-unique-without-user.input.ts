import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoutineWhereUniqueInput } from './routine-where-unique.input';
import { Type } from 'class-transformer';
import { RoutineUpdateWithoutUserInput } from './routine-update-without-user.input';

@InputType()
export class RoutineUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => RoutineWhereUniqueInput, {nullable:false})
    @Type(() => RoutineWhereUniqueInput)
    where!: RoutineWhereUniqueInput;

    @Field(() => RoutineUpdateWithoutUserInput, {nullable:false})
    @Type(() => RoutineUpdateWithoutUserInput)
    data!: RoutineUpdateWithoutUserInput;
}
