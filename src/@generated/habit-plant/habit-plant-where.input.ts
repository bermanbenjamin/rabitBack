import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { HabitRelationFilter } from '../habit/habit-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumPlantEnumFilter } from '../prisma/enum-plant-enum-filter.input';

@InputType()
export class HabitPlantWhereInput {

    @Field(() => [HabitPlantWhereInput], {nullable:true})
    AND?: Array<HabitPlantWhereInput>;

    @Field(() => [HabitPlantWhereInput], {nullable:true})
    OR?: Array<HabitPlantWhereInput>;

    @Field(() => [HabitPlantWhereInput], {nullable:true})
    NOT?: Array<HabitPlantWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => HabitRelationFilter, {nullable:true})
    habit?: HabitRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    positionBot?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    positionLeft?: IntFilter;

    @Field(() => EnumPlantEnumFilter, {nullable:true})
    plant?: EnumPlantEnumFilter;
}
