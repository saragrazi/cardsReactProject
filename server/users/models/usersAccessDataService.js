const DB = process.env.DB || "MONGODB";
const User = require("./mongodb/User");
const lodash = require("lodash");
const { comparePassword } = require("../helpers/bcrypt");
const { generateAuthToken } = require("../../auth/Providers/jwt");
const { handleBadRequest } = require("../../utils/handleErrors");
// const { LoginAttempts } = require("./mongodb/loginAttempt");

const registerUser = async(normalizedUser) => {
    if (DB === "MONGODB") {
        try {
            const { email } = normalizedUser;
            let user = await User.findOne({ email });
            if (user) throw new Error("User already registered");

            user = new User(normalizedUser);
            user = await user.save();

            user = lodash.pick(user, ["name", "email", "_id"]);
            return Promise.resolve(user);
        } catch (error) {
            error.status = 400;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("registerUser new user not in mongodb");
};

const loginUser = async({ email, password }) => {
    if (DB === "MONGODB") {
        try {
            const user = await User.findOne({ email });
            if (!user) {
                throw new Error("Authentication Error: Invalid email or password");
            }

            const validPassword = comparePassword(password, user.password);
            if (!validPassword) {

                throw new Error("Authentication Error: Invalid email or password");
            }

            const token = generateAuthToken(user);
            return Promise.resolve(token);
        } catch (error) {
            error.status = 400;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("loginUser user not in mongodb");
};


// const logUserLoginFail = async(email, userIp) => {
//     const expirationDate = new Date().getTime() + 60 * 60 * 24 * 1000
//     const maximumTries = 2
//         // When you check the code you can change 
//         // to lower time so that you will see the logUserFailAttempt works
//         // + 60 * 60
//     if (DB === "MONGODB") {
//         try {
//             const bannedList = await LoginAttempts.find()
//             bannedList.map((obj) => {
//                 if (new Date().getTime() >= obj ? .expire) {
//                     obj.delete()
//                 }
//             })
//         } catch (error) {
//             return Promise.reject(error);
//         }

//         try {
//             const attempt = await LoginAttempts.findOne({ "$and": [{ email: email, ip: userIp }] });
//             console.log(attempt);
//             if (!attempt) {
//                 let attemptRegistry = new LoginAttempts({ email: email, ip: userIp, expire: expirationDate, try: 0 });
//                 attemptRegistry = await attemptRegistry.save();
//                 return Promise.resolve("Authentication Error: Invalid email or password");
//             }

//             if (attempt ? .try >= maximumTries && new Date().getTime() < attempt ? .expire) {
//                 throw new Error(`You are blocked until ${new Date(attempt?.expire)}`)
//             }

//             if (attempt ? .try >= maximumTries && new Date().getTime() >= attempt ? .expire) {
//                 attempt.delete()
//             }

//             if (attempt) {
//                 await attempt.updateOne({ try: attempt.try+1 });
//                 return Promise.resolve("Authentication Error: Invalid email or password");
//             }
//         } catch (error) {
//             return Promise.reject(error);
//         }
//     }
// }

const getUsers = async() => {
    if (DB === "MONGODB") {
        try {
            const users = await User.find({}, { password: 0, __v: 0 });
            return Promise.resolve(users);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("get users not in mongodb");
};

const getUser = async(userId) => {
    if (DB === "MONGODB") {
        try {
            let user = await User.findById(userId, {
                password: 0,
                __v: 0,
            });
            if (!user) throw new Error("Could not find this user in the database");
            return Promise.resolve(user);
        } catch (error) {
            error.status = 404;
            return handleBadRequest("Mongoose", error);
        }
    }
    return Promise.resolve("get user not in mongodb");
};

const updateUser = async(userId, normalizedUser) => {
    if (DB === "MONGODB") {
        try {
            let user = await User.findByIdAndUpdate(userId, normalizedUser) // זה לא היה קיים בכלל !!!!!
            return Promise.resolve({ userId, user });
        } catch (error) {
            error.status = 400;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("card update not in mongodb");
};

const changeUserBusinessStatus = async(userId, status) => {
    if (DB === "MONGODB") {
        try {
            await User.findByIdAndUpdate(userId, { isBusiness: status })
            return Promise.resolve(`user no. ${userId} change his business status!`);
        } catch (error) {
            error.status = 400;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("card liked not in mongodb");
};

const deleteUser = async(userId) => {
    if (DB === "MONGODB") {
        try {
            await User.findByIdAndDelete(userId)
            return Promise.resolve(`user no. ${userId} deleted!`);
        } catch (error) {
            error.status = 400;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("card deleted not in mongodb");
};

exports.registerUser = registerUser;
exports.loginUser = loginUser;
exports.getUsers = getUsers;
exports.getUser = getUser;
exports.updateUser = updateUser;
exports.changeUserBusinessStatus = changeUserBusinessStatus;
exports.deleteUser = deleteUser;
// exports.logUserLoginFail = logUserLoginFail