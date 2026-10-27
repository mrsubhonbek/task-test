import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Experience } from './experience.model';
import { Link } from './link.model';
import { Project } from './project.model';
import { Skill } from './skill.model';

@ObjectType()
export class Profile {
  @Field(() => ID)
  id!: number;

  @Field()
  name!: string;

  @Field()
  description!: string;

  @Field(() => [Link])
  links?: Link[];

  @Field(() => [Skill])
  skills?: Skill[];

  @Field(() => [Experience])
  experience?: Experience[];

  @Field(() => [Project])
  projects?: Project[];
}
