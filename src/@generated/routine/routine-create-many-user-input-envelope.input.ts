import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoutineCreateManyUserInput } from './routine-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class RoutineCreateManyUserInputEnvelope {

    @Field(() => [RoutineCreateManyUserInput], {nullable:false})
    @Type(() => RoutineCreateManyUserInput)
    data!: Array<RoutineCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
