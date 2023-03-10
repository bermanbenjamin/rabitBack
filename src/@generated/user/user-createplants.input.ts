import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlantEnum } from '../prisma/plant.enum';

@InputType()
export class UserCreateplantsInput {

    @Field(() => [PlantEnum], {nullable:false})
    set!: Array<keyof typeof PlantEnum>;
}
