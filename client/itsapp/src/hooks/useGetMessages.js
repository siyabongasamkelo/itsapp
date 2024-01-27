import { baseUrl, getRequest } from "../utils/Services";

export const getMessages = async (chatRoomId) => {
  try {
    const messages = await getRequest(`${baseUrl}/messages/get/${chatRoomId}`);
    return messages;
  } catch (err) {
    console.log(err);
    return err;
  }
};
