import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlantEnum } from './plant.enum';
import { NestedEnumPlantEnumFilter } from './nested-enum-plant-enum-filter.input';

@InputType()
export class EnumPlantEnumFilter {

    @Field(() => PlantEnum, {nullable:true})
    equals?: keyof typeof PlantEnum;

    @Field(() => [PlantEnum], {nullable:true})
    in?: Array<keyof typeof PlantEnum>;

    @Field(() => [PlantEnum], {nullable:true})
    notIn?: Array<keyof typeof PlantEnum>;

    @Field(() => NestedEnumPlantEnumFilter, {nullable:true})
    not?: NestedEnumPlantEnumFilter;
}
