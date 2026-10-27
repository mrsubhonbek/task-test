import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Experience {
  @Field()
  company!: string;

  @Field()
  position!: string;

  @Field(() => Date)
  startDate!: Date;

  @Field(() => Date, {
    nullable: true,
    description: 'null означает, что человек работает здесь по настоящее время',
  })
  endDate!: Date | null;

  @Field()
  achievements!: string;
}
