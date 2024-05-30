export class UserDTO {
  constructor(user: unknown) {
    Object.assign(this, user);
  }
  id?: number;
  uid: string;
  email?: string;
  picture?: string;
  given_name?: string;
  family_name?: string;
  display_name?: string;
}
