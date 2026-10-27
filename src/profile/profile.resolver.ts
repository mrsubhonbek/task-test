import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Experience } from './models/experience.model';
import { Link } from './models/link.model';
import { Profile } from './models/profile.model';
import { Project } from './models/project.model';
import { Skill } from './models/skill.model';
import { ProfileService } from './profile.service';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => Profile)
  profile() {
    return this.profileService.getProfile();
  }

  @ResolveField(() => [Link])
  links(@Parent() profile: Profile) {
    return this.profileService.getLinks(profile.id);
  }

  @ResolveField(() => [Skill])
  skills(@Parent() profile: Profile) {
    return this.profileService.getSkills(profile.id);
  }

  @ResolveField(() => [Experience])
  experience(@Parent() profile: Profile) {
    return this.profileService.getExperience(profile.id);
  }

  @ResolveField(() => [Project])
  projects(@Parent() profile: Profile) {
    return this.profileService.getProjects(profile.id);
  }
}
