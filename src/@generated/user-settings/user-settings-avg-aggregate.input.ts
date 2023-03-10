import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserSettingsAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    weekStartsOn?: true;
}
