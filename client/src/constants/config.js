//API_NOTIFICATION
const API_NOTIFICATION_MESSAGES = {
  loading: {
    title: "Loading...",
    message: "Data is loading...",
  },
  success: {
    title: "Success",
    message: "Data successfully loaded",
  },
  responseFailure: {
    title: "Error",
    message:
      "Ann error occurred while fetching response from the server. Please try again",
  },
  requestFailure: {
    title: "Error",
    message: "An error occurred while parsing request data",
  },
  networkError: {
    title: "Error",
    message: "An error occurred with the server",
  },
};
export const SERVICE_URLS = {
  userSignup: { url: "/signup", method: "POST" },
};
export { API_NOTIFICATION_MESSAGES };

// module.exports = {
//   SERVICE_URLS,
//   API_NOTIFICATION_MESSAGE,
// };
