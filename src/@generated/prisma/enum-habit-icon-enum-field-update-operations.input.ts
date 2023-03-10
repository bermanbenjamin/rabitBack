import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HabitIconEnum } from './habit-icon.enum';

@InputType()
export class EnumHabitIconEnumFieldUpdateOperationsInput {

    @Field(() => HabitIconEnum, {nullable:true})
    set?: keyof typeof HabitIconEnum;
}
