import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitColorEnum } from './habit-color.enum';

@InputType()
export class EnumHabitColorEnumFieldUpdateOperationsInput {

    @Field(() => HabitColorEnum, {nullable:true})
    set?: keyof typeof HabitColorEnum;
}
