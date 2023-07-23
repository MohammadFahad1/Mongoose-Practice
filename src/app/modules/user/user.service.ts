import User from "./user.model";

export const createUserToDB = async () => {
    const user = new User({
        id: '3',
        role: "student",
        password: "janina",
        name: {
            firstName: "Md. ",
            middleName: "Rajib",
            lastName: "Monshi"
        },
        dateOfBirth: '20/04/1985',
        gender: "male",
        email: "raji@gmail.com",
        contactNo: "01772211521",
        emergencyContactNo: "01959643630",
        presentAddress: "Dhaka, Bangladesh",
        permanentAddress: "Cumilla"
    });

    await user.save();
    return user;
}