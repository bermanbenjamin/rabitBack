import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitCreateWithoutRoutineInput } from './habit-create-without-routine.input';
import { Type } from 'class-transformer';
import { HabitCreateOrConnectWithoutRoutineInput } from './habit-create-or-connect-without-routine.input';
import { HabitCreateManyRoutineInputEnvelope } from './habit-create-many-routine-input-envelope.input';
import { HabitWhereUniqueInput } from './habit-where-unique.input';

@InputType()
export class HabitCreateNestedManyWithoutRoutineInput {

    @Field(() => [HabitCreateWithoutRoutineInput], {nullable:true})
    @Type(() => HabitCreateWithoutRoutineInput)
    create?: Array<HabitCreateWithoutRoutineInput>;

    @Field(() => [HabitCreateOrConnectWithoutRoutineInput], {nullable:true})
    @Type(() => HabitCreateOrConnectWithoutRoutineInput)
    connectOrCreate?: Array<HabitCreateOrConnectWithoutRoutineInput>;

    @Field(() => HabitCreateManyRoutineInputEnvelope, {nullable:true})
    @Type(() => HabitCreateManyRoutineInputEnvelope)
    createMany?: HabitCreateManyRoutineInputEnvelope;

    @Field(() => [HabitWhereUniqueInput], {nullable:true})
    @Type(() => HabitWhereUniqueInput)
    connect?: Array<HabitWhereUniqueInput>;
}
