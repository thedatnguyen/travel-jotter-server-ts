export class PostDTO {
  constructor(obj: unknown) {
    Object.assign(this, obj);
  }
  id: number;
  title: string;
  description: string;
  author: string;
  url: string;
}
