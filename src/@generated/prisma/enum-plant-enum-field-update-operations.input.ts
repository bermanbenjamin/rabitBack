import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlantEnum } from './plant.enum';

@InputType()
export class EnumPlantEnumFieldUpdateOperationsInput {

    @Field(() => PlantEnum, {nullable:true})
    set?: keyof typeof PlantEnum;
}
