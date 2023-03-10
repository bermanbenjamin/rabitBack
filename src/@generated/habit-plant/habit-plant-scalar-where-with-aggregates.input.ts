import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumPlantEnumWithAggregatesFilter } from '../prisma/enum-plant-enum-with-aggregates-filter.input';

@InputType()
export class HabitPlantScalarWhereWithAggregatesInput {

    @Field(() => [HabitPlantScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<HabitPlantScalarWhereWithAggregatesInput>;

    @Field(() => [HabitPlantScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<HabitPlantScalarWhereWithAggregatesInput>;

    @Field(() => [HabitPlantScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<HabitPlantScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    positionBot?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    positionLeft?: IntWithAggregatesFilter;

    @Field(() => EnumPlantEnumWithAggregatesFilter, {nullable:true})
    plant?: EnumPlantEnumWithAggregatesFilter;
}
