import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../src/app.module';

const PROFILE_QUERY = `
  query {
    profile {
      name
      description
      links { label url }
      skills { name }
      experience { company position startDate endDate achievements }
      projects { name url }
    }
  }
`;

interface ProfileResponse {
  errors?: unknown[];
  data: {
    profile: {
      name: string;
      description: string;
      links: { label: string; url: string }[];
      skills: { name: string }[];
      experience: {
        company: string;
        position: string;
        startDate: string;
        endDate: string | null;
        achievements: string;
      }[];
      projects: { name: string; url: string }[];
    };
  };
}

describe('GraphQL profile (e2e)', () => {
  let app: INestApplication<App>;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('returns the profile with all nested data', async () => {
    const response = await request(app.getHttpServer())
      .post('/graphql')
      .send({ query: PROFILE_QUERY })
      .expect(200);

    const { errors, data } = response.body as ProfileResponse;
    expect(errors).toBeUndefined();

    const { profile } = data;
    expect(profile.name).not.toHaveLength(0);
    expect(profile.description).not.toHaveLength(0);
    expect(profile.links.length).toBeGreaterThan(0);
    expect(profile.skills.length).toBeGreaterThan(0);
    expect(profile.experience.length).toBeGreaterThan(0);
    expect(profile.projects.length).toBeGreaterThan(0);

    const [job] = profile.experience;
    expect(job.company).not.toHaveLength(0);
    expect(job.position).not.toHaveLength(0);
    expect(job.startDate).not.toHaveLength(0);
    expect(job.achievements).not.toHaveLength(0);
  });
});
