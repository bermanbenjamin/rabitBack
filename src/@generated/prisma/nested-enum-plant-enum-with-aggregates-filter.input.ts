import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlantEnum } from './plant.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPlantEnumFilter } from './nested-enum-plant-enum-filter.input';

@InputType()
export class NestedEnumPlantEnumWithAggregatesFilter {

    @Field(() => PlantEnum, {nullable:true})
    equals?: keyof typeof PlantEnum;

    @Field(() => [PlantEnum], {nullable:true})
    in?: Array<keyof typeof PlantEnum>;

    @Field(() => [PlantEnum], {nullable:true})
    notIn?: Array<keyof typeof PlantEnum>;

    @Field(() => NestedEnumPlantEnumWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPlantEnumWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPlantEnumFilter, {nullable:true})
    _min?: NestedEnumPlantEnumFilter;

    @Field(() => NestedEnumPlantEnumFilter, {nullable:true})
    _max?: NestedEnumPlantEnumFilter;
}
