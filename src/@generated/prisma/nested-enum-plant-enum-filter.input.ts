import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlantEnum } from './plant.enum';

@InputType()
export class NestedEnumPlantEnumFilter {

    @Field(() => PlantEnum, {nullable:true})
    equals?: keyof typeof PlantEnum;

    @Field(() => [PlantEnum], {nullable:true})
    in?: Array<keyof typeof PlantEnum>;

    @Field(() => [PlantEnum], {nullable:true})
    notIn?: Array<keyof typeof PlantEnum>;

    @Field(() => NestedEnumPlantEnumFilter, {nullable:true})
    not?: NestedEnumPlantEnumFilter;
}
