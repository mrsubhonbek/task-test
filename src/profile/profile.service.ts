import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async getProfile() {
    const profile = await this.prisma.profile.findFirst({
      orderBy: { id: 'asc' },
    });
    if (!profile) {
      throw new NotFoundException('Profile not found');
    }
    return profile;
  }

  getLinks(profileId: number) {
    return this.prisma.link.findMany({
      where: { profileId },
      orderBy: { id: 'asc' },
    });
  }

  getSkills(profileId: number) {
    return this.prisma.skill.findMany({
      where: { profileId },
      orderBy: { id: 'asc' },
    });
  }

  getExperience(profileId: number) {
    return this.prisma.experience.findMany({
      where: { profileId },
      orderBy: { startDate: 'desc' },
    });
  }

  getProjects(profileId: number) {
    return this.prisma.project.findMany({
      where: { profileId },
      orderBy: { id: 'asc' },
    });
  }
}
