import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
// import { identity } from 'rxjs';
import { PostDTO } from './posts.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get()
  getAllPosts() {
    const posts: Array<PostDTO> = this.postService.getAllPosts();
    return posts;
  }

  @Get(':postId')
  getPostById(@Param('postId') id: number) {
    const post = this.postService.getPostById(id);
    return post;
  }

  @Post()
  addPost(@Body() post: PostDTO) {
    const newPost = this.postService.addPost(post);
    return newPost;
  }

  @Delete(':postId')
  deletePost(@Param(':postId') id: number) {
    const deletedPost = this.postService.deletePost(id);
    return deletedPost;
  }
}
