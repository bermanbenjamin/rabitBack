import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlantEnum } from './plant.enum';

@InputType()
export class EnumPlantEnumNullableListFilter {

    @Field(() => [PlantEnum], {nullable:true})
    equals?: Array<keyof typeof PlantEnum>;

    @Field(() => PlantEnum, {nullable:true})
    has?: keyof typeof PlantEnum;

    @Field(() => [PlantEnum], {nullable:true})
    hasEvery?: Array<keyof typeof PlantEnum>;

    @Field(() => [PlantEnum], {nullable:true})
    hasSome?: Array<keyof typeof PlantEnum>;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;
}
