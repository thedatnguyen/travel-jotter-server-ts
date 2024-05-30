export class WeavyListAPIs {
  constructor() {}

  private readonly baseUrl: string = `${process.env.WEAVY_BASE_URL}/api`;

  createUserUrl: string = `${this.baseUrl}/users`;
  listUsersUrl: string = `${this.baseUrl}/users`;
  getUserByIdUrl = (userId: number): string =>
    `${this.baseUrl}/users/${userId}`;
  trashUserByIdUrl = (userId: number): string =>
    `${this.baseUrl}/users/${userId}/trash`;
  getTokenForUserUrl = (userId: number): string =>
    `${this.baseUrl}/users/${userId}/tokens`;
  updateUserByIdUrl = (userId: number): string =>
    `${this.baseUrl}/users/${userId}`;
  createConversationUrl: string = `${this.baseUrl}/conversations`;
}
