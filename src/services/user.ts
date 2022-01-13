import { UserDocument } from '../models/users'

export const createUser = async (user: UserDocument): Promise<UserDocument> => {
  return user.save()
}
