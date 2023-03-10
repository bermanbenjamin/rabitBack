import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoutineCreateManyInput } from './routine-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyRoutineArgs {

    @Field(() => [RoutineCreateManyInput], {nullable:false})
    @Type(() => RoutineCreateManyInput)
    data!: Array<RoutineCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
