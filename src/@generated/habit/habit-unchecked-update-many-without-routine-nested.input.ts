import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitCreateWithoutRoutineInput } from './habit-create-without-routine.input';
import { Type } from 'class-transformer';
import { HabitCreateOrConnectWithoutRoutineInput } from './habit-create-or-connect-without-routine.input';
import { HabitUpsertWithWhereUniqueWithoutRoutineInput } from './habit-upsert-with-where-unique-without-routine.input';
import { HabitCreateManyRoutineInputEnvelope } from './habit-create-many-routine-input-envelope.input';
import { HabitWhereUniqueInput } from './habit-where-unique.input';
import { HabitUpdateWithWhereUniqueWithoutRoutineInput } from './habit-update-with-where-unique-without-routine.input';
import { HabitUpdateManyWithWhereWithoutRoutineInput } from './habit-update-many-with-where-without-routine.input';
import { HabitScalarWhereInput } from './habit-scalar-where.input';

@InputType()
export class HabitUncheckedUpdateManyWithoutRoutineNestedInput {

    @Field(() => [HabitCreateWithoutRoutineInput], {nullable:true})
    @Type(() => HabitCreateWithoutRoutineInput)
    create?: Array<HabitCreateWithoutRoutineInput>;

    @Field(() => [HabitCreateOrConnectWithoutRoutineInput], {nullable:true})
    @Type(() => HabitCreateOrConnectWithoutRoutineInput)
    connectOrCreate?: Array<HabitCreateOrConnectWithoutRoutineInput>;

    @Field(() => [HabitUpsertWithWhereUniqueWithoutRoutineInput], {nullable:true})
    @Type(() => HabitUpsertWithWhereUniqueWithoutRoutineInput)
    upsert?: Array<HabitUpsertWithWhereUniqueWithoutRoutineInput>;

    @Field(() => HabitCreateManyRoutineInputEnvelope, {nullable:true})
    @Type(() => HabitCreateManyRoutineInputEnvelope)
    createMany?: HabitCreateManyRoutineInputEnvelope;

    @Field(() => [HabitWhereUniqueInput], {nullable:true})
    @Type(() => HabitWhereUniqueInput)
    set?: Array<HabitWhereUniqueInput>;

    @Field(() => [HabitWhereUniqueInput], {nullable:true})
    @Type(() => HabitWhereUniqueInput)
    disconnect?: Array<HabitWhereUniqueInput>;

    @Field(() => [HabitWhereUniqueInput], {nullable:true})
    @Type(() => HabitWhereUniqueInput)
    delete?: Array<HabitWhereUniqueInput>;

    @Field(() => [HabitWhereUniqueInput], {nullable:true})
    @Type(() => HabitWhereUniqueInput)
    connect?: Array<HabitWhereUniqueInput>;

    @Field(() => [HabitUpdateWithWhereUniqueWithoutRoutineInput], {nullable:true})
    @Type(() => HabitUpdateWithWhereUniqueWithoutRoutineInput)
    update?: Array<HabitUpdateWithWhereUniqueWithoutRoutineInput>;

    @Field(() => [HabitUpdateManyWithWhereWithoutRoutineInput], {nullable:true})
    @Type(() => HabitUpdateManyWithWhereWithoutRoutineInput)
    updateMany?: Array<HabitUpdateManyWithWhereWithoutRoutineInput>;

    @Field(() => [HabitScalarWhereInput], {nullable:true})
    @Type(() => HabitScalarWhereInput)
    deleteMany?: Array<HabitScalarWhereInput>;
}
