import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserSettingsSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    weekStartsOn?: true;
}
