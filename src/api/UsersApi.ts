import Axios from "axios";
import User, {UserDTO} from "@/models/User";

interface RequestInterface {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: UserDTO[]
}

export abstract class UsersApi {
  private static usersAxios = Axios.create();

  static async getAllUsers(): Promise<User[]>{
    let response = await this.usersAxios.get<RequestInterface>('https://reqres.in/api/users');
    return response.data.data.map(userDto => new User(userDto));
  }
}
