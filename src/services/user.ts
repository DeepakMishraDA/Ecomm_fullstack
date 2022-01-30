import Users, { UserDocument } from '../models/users'

export const createUser = async (user: UserDocument): Promise<UserDocument> => {
  return user.save()
}

export const findAll = async (): Promise<UserDocument[]> => {
  return Users.find()
}
