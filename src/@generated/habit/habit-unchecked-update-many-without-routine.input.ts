import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitCreateWithoutRoutineInput } from './habit-create-without-routine.input';
import { HabitCreateOrConnectWithoutRoutineInput } from './habit-create-or-connect-without-routine.input';
import { HabitUpsertWithWhereUniqueWithoutRoutineInput } from './habit-upsert-with-where-unique-without-routine.input';
import { HabitCreateManyRoutineInputEnvelope } from './habit-create-many-routine-input-envelope.input';
import { HabitWhereUniqueInput } from './habit-where-unique.input';
import { HabitUpdateWithWhereUniqueWithoutRoutineInput } from './habit-update-with-where-unique-without-routine.input';
import { HabitUpdateManyWithWhereWithoutRoutineInput } from './habit-update-many-with-where-without-routine.input';
import { HabitScalarWhereInput } from './habit-scalar-where.input';

@InputType()
export class HabitUncheckedUpdateManyWithoutRoutineInput {

    @Field(() => [HabitCreateWithoutRoutineInput], {nullable:true})
    create?: Array<HabitCreateWithoutRoutineInput>;

    @Field(() => [HabitCreateOrConnectWithoutRoutineInput], {nullable:true})
    connectOrCreate?: Array<HabitCreateOrConnectWithoutRoutineInput>;

    @Field(() => [HabitUpsertWithWhereUniqueWithoutRoutineInput], {nullable:true})
    upsert?: Array<HabitUpsertWithWhereUniqueWithoutRoutineInput>;

    @Field(() => HabitCreateManyRoutineInputEnvelope, {nullable:true})
    createMany?: HabitCreateManyRoutineInputEnvelope;

    @Field(() => [HabitWhereUniqueInput], {nullable:true})
    set?: Array<HabitWhereUniqueInput>;

    @Field(() => [HabitWhereUniqueInput], {nullable:true})
    disconnect?: Array<HabitWhereUniqueInput>;

    @Field(() => [HabitWhereUniqueInput], {nullable:true})
    delete?: Array<HabitWhereUniqueInput>;

    @Field(() => [HabitWhereUniqueInput], {nullable:true})
    connect?: Array<HabitWhereUniqueInput>;

    @Field(() => [HabitUpdateWithWhereUniqueWithoutRoutineInput], {nullable:true})
    update?: Array<HabitUpdateWithWhereUniqueWithoutRoutineInput>;

    @Field(() => [HabitUpdateManyWithWhereWithoutRoutineInput], {nullable:true})
    updateMany?: Array<HabitUpdateManyWithWhereWithoutRoutineInput>;

    @Field(() => [HabitScalarWhereInput], {nullable:true})
    deleteMany?: Array<HabitScalarWhereInput>;
}
