import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { PostDTO } from 'src/posts/posts.dto';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  const httpServer = app.getHttpServer();

  it('/ (GET)', async () => {
    const result = await request(httpServer).get('/');
    expect(result.status).toBe(200);
    expect(result.body).toBeInstanceOf('string');
  });

  // testing /posts
  it('GET /posts', async () => {
    const result = (await request(httpServer).get('/posts')).body;
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBeGreaterThanOrEqual(0);
    if (result.length) {
      expect(new PostDTO(result[0])).toBeInstanceOf(PostDTO);
    }
  });
});
