import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoutineWhereUniqueInput } from './routine-where-unique.input';
import { Type } from 'class-transformer';
import { RoutineUpdateWithoutUserInput } from './routine-update-without-user.input';
import { RoutineCreateWithoutUserInput } from './routine-create-without-user.input';

@InputType()
export class RoutineUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => RoutineWhereUniqueInput, {nullable:false})
    @Type(() => RoutineWhereUniqueInput)
    where!: RoutineWhereUniqueInput;

    @Field(() => RoutineUpdateWithoutUserInput, {nullable:false})
    @Type(() => RoutineUpdateWithoutUserInput)
    update!: RoutineUpdateWithoutUserInput;

    @Field(() => RoutineCreateWithoutUserInput, {nullable:false})
    @Type(() => RoutineCreateWithoutUserInput)
    create!: RoutineCreateWithoutUserInput;
}
