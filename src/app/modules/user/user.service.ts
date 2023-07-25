import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    const user = new User(payload);

    console.log(user.fullName());


    await user.save();
    return user;
}

export const getUsersFromDB = async () => {
    const users = await User.find();
    return users;
}

export const getUserByIdFromDB = async (payload: string): Promise<IUser | null> => {
    const user = await User.findOne({ id: payload }, { name: 1, email: 1, contactNo: 1 });
    return user;
}

export const getAdminUsersFromDB = async (): Promise<IUser[]> => {
    const admins = await User.find({ role: "admin" });
    return admins;
}