import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserSettingsMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    isOnVacation?: boolean;

    @Field(() => Boolean, {nullable:true})
    isWithoutAlarms?: boolean;

    @Field(() => Int, {nullable:true})
    weekStartsOn?: number;
}
