import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class UserSettingsUncheckedCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    isOnVacation?: boolean;

    @Field(() => Boolean, {nullable:true})
    isWithoutAlarms?: boolean;

    @Field(() => Int, {nullable:true})
    weekStartsOn?: number;
}
