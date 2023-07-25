import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods } from "./user.interface";

type userModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, userModel, IUserMethods>({
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
    name: {
        firstName: { type: String, required: true },
        middleName: { type: String },
        lastName: { type: String, required: true }
    },
    dateOfBirth: { type: String },
    gender: { type: String, required: true, enum: ['male', 'female'] },
    email: { type: String },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true }
});

userSchema.method('fullName', function fullName() {
    return this.name.firstName + " " + this.name.lastName;
});

userSchema.static("getAdminUsers", async function getAdminUsers() {
    const admins = await this.find({ role: "admin" });
})

// Creating Model
const User = model<IUser, userModel>('User', userSchema);

export default User;