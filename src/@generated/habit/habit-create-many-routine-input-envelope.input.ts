import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitCreateManyRoutineInput } from './habit-create-many-routine.input';
import { Type } from 'class-transformer';

@InputType()
export class HabitCreateManyRoutineInputEnvelope {

    @Field(() => [HabitCreateManyRoutineInput], {nullable:false})
    @Type(() => HabitCreateManyRoutineInput)
    data!: Array<HabitCreateManyRoutineInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
