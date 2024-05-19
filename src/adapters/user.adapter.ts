import { Unsubscribe } from "firebase/auth";
import { userMD } from "../models/user.model";
import {
  createNewUserAuth,
  logOutAuth,
  loginUserAuth,
  passwordResetFromEmail,
  authStateListener,
  getAuthJWTId,
} from "../services/firebaseAuth";
// import { getUserTokenFM } from "../services/firebaseMessaging";
// import {
//   createSetDocDB,
//   editAndUpdateDocsDB,
//   getDocsDB,
// } from "../services/firestoreDB";
// import { capitalizeText } from "../utils/functions";
// import { getSingleMemberByQuery } from "./members.adapter";

// const userMapper = (objectToMap: any): userMD => {
//   const user: userMD = {
//     id: objectToMap.id || "",
//     name: capitalizeText(objectToMap.name || ""),
//     lastName: capitalizeText(objectToMap.lastName || ""),
//     companyID: objectToMap.companyID || "",
//     role: objectToMap.role || "",
//     memberID: objectToMap.memberID || "",
//     messagingToken: objectToMap.messagingToken || "",
//     email: objectToMap.email || "",
//     messagingTokenCreatedAt: objectToMap.messagingTokenCreatedAt || "",
//     userName: objectToMap.userName || "",
//   };
//   return user;
// };
// export const getUsers = async (): Promise<userMD[]> => {
//   const response = await getDocsDB("Users");
//   const usersInfo: userMD[] = response.map((company: any) =>
//     userMapper(company)
//   );
//   return usersInfo;
// };
// export const createNewUserDB = async (
//   userID: string,
//   userData: any
// ): Promise<void> => {
//   await createSetDocDB(`Users/${userID}`, userData);
// };
// export const getUsersByCompanyID = async (
//   companyID: string
// ): Promise<userMD[]> => {
//   const response: any = await getDocsDB(`Users`, [
//     {
//       field: "companyID",
//       operator: "==",
//       value: companyID,
//     },
//   ]);
//   if (response) {
//     const users: userMD[] = response.map((user: any) => {
//       return userMapper(user);
//     });
//     return users;
//   } else {
//     return [];
//   }
// };
// export const getUserInfoByID = async (userUid: string): Promise<userMD> => {
//   const response: any = await getDocsDB(`Users/${userUid}`);
//   const userInfo: userMD = userMapper(response);
//   return userInfo;
// };
// export const getUserByUserName = async (userName: string): Promise<userMD> => {
//   const response: any = await getDocsDB(`Users`, [
//     {
//       field: "userName",
//       operator: "==",
//       value: userName,
//     },
//   ]);
//   const result = response[0] || {};
//   const userInfo: userMD = userMapper(result);
//   return userInfo;
// };
// export const getUserMembershipForProfile = async (
//   companyID: string,
//   memberID: string
// ): Promise<memberMD> => {
//   const membershipProfile: memberMD = await getSingleMemberByQuery(companyID, [
//     {
//       field: "id",
//       operator: "==",
//       value: memberID,
//     },
//   ]);
//   return membershipProfile;
// };
// export const editAndUpdateUserInfo = async (
//   userID: string,
//   data: Partial<userMD>
// ): Promise<void> => {
//   try {
//     await editAndUpdateDocsDB(`${COLLECTIONS.USERS}/${userID}`, data);
//   } catch (err) {
//     console.error(err);
//   }
// };
// export const getUserNotificationsToken = async (): Promise<string> => {
//   const userToken = await getUserTokenFM();
//   return userToken;
// };
export const logoutUserAuthentication = async (): Promise<void> => {
  await logOutAuth();
};
export const loginUserAuthentication = async (
  email: string,
  password: string
) => {
  let authCredential: any = await loginUserAuth(email, password);
  return authCredential;
};
export const createNewUserAuthentication = async (
  email: string,
  password: string,
  name: string,
  lastName: string
) => {
  const userCredential: any = await createNewUserAuth(
    email.toUpperCase().trim(),
    password.trim(),
    name.toUpperCase().trim().replace(/\s+/g, " "),
    lastName.toUpperCase().trim().replace(/\s+/g, " ")
  );
  return userCredential;
};
export const resetPasswordWithEmail = async (email: string) => {
  let response = await passwordResetFromEmail(email);
  return response;
};
export const userAuthListener = (
  userUpdater: (user: userMD) => void
): Unsubscribe => {
  return authStateListener(async (currentUser: any) => {
    console.log("currentUser", currentUser);
    // let user: userMD = {} as userMD;
    // if (currentUser) {
    //   user = await getUserInfoByID(currentUser.uid);
    // }
    userUpdater(currentUser);
  });
};
export const getUserAuthJWTToken = async () => {
  const token = await getAuthJWTId();
  return token;
};
