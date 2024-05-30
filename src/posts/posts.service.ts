import { Injectable, HttpException } from '@nestjs/common';
import { PostDTO } from './posts.dto';

@Injectable()
export class PostsService {
  posts = [
    {
      id: 1,
      title: 'Chúng tôi là ai?',
      description:
        'Sun Asterisk chứa đựng ước mơ và mục tiêu kiến tạo nên thật nhiều những điều tốt đẹp cho xã hội của tập thể những chiến binh mặt trời.',
      author: 'Sun*',
      url: 'https://sun-asterisk.vn/ve-chung-toi/',
    },
    {
      id: 2,
      title: 'Chúng tôi làm gì?',
      description:
        'Là một Digital Creative Studio, Sun* luôn đề cao tinh thần làm chủ sản phẩm, tư duy sáng tạo trong mỗi dự án để mang đến những trải nghiệm "Awesome" nhất cho end-user',
      author: 'Sun*',
      url: 'https://sun-asterisk.vn/creative-engineering/',
    },
  ];

  getAllPosts = () => {
    const result: Array<PostDTO> = this.posts;
    return result;
  };

  getPostById = (id: number) => {
    const post = this.posts.filter((post) => post.id == id);
    if (!post.length) return new HttpException('post not found', 404);
    return post;
  };

  addPost = (post: PostDTO) => {
    this.posts.push(post);
  };

  deletePost = (id: number) => {
    const index = this.posts.findIndex((post) => post.id == id);
    if (index < 0) return new HttpException('post not found', 404);
    const post = this.posts[index];
    this.posts.splice(index, 1);
    return post;
  };
}
