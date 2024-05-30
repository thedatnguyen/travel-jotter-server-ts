import { Injectable } from '@nestjs/common';
import { WeavyListAPIs } from './weavy.configs';
import { UserDTO } from './weavy.userDTO';
import axios from 'axios';

@Injectable()
export class WeavyService {
  private readonly apis = new WeavyListAPIs();
  private readonly configs = {
    headers: {
      'content-type': 'application/json',
      Authorization: process.env.WEAVY_TOKEN_FACTORY,
    },
  };

  getAllUsers = async () => {
    const result = {
      data: undefined,
      error: undefined,
    };
    await axios
      .get(this.apis.listUsersUrl, this.configs)
      .then((apiRes): void => (result.data = apiRes.data))
      .catch((err): void => (result.error = err));
    return result;
  };

  createNewUser = async (userInfo: UserDTO) => {
    const result = {
      data: undefined,
      error: undefined,
    };
    const body = userInfo;
    await axios
      .post(this.apis.createUserUrl, body, this.configs)
      .then((apiRes): void => (result.data = apiRes.data))
      .catch((err): void => (result.error = err));
  };
}
