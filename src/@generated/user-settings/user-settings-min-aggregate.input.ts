import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserSettingsMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    isOnVacation?: true;

    @Field(() => Boolean, {nullable:true})
    isWithoutAlarms?: true;

    @Field(() => Boolean, {nullable:true})
    weekStartsOn?: true;
}
