import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlantEnum } from '../prisma/plant.enum';

@InputType()
export class UserUpdateplantsInput {

    @Field(() => [PlantEnum], {nullable:true})
    set?: Array<keyof typeof PlantEnum>;

    @Field(() => [PlantEnum], {nullable:true})
    push?: Array<keyof typeof PlantEnum>;
}
