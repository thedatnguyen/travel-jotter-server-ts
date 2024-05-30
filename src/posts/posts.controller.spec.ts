import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostDTO } from './posts.dto';

describe('PostsController', () => {
  let controller: PostsController;
  let service: PostsService;

  beforeEach(() => {
    service = new PostsService();
    controller = new PostsController(service);
  });

  describe('get all posts', () => {
    it('should return all posts', () => {
      const result = service.getAllPosts();
      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);
      // expect(result[0]).toBeInstanceOf(PostDTO);
    });
  });
});
