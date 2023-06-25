import axios from "axios";
import parseJWTPayload from "./utils/parseJWTPayload";
import { user } from "../../constants/endpoints";
import { config } from "../../config";

class Authentication {
  postLogin({ email, password }) {
    const loginEndpoint = user.postLogin();
    const { BASEURL: API_BASE_URL } = config;

    return axios(`${API_BASE_URL}${loginEndpoint}`, {
      method: "POST",
      data: {
        email,
        password,
      },
    }).then((response) => {
      const accessToken = response.data.accessToken;
      localStorage.setItem("creds", accessToken);
    });
  }

  logout() {
    localStorage.removeItem("creds");
  }

  register() {}

  isAuthenticated() {
    let hasAccessTokenExpired;
    const accessToken = this.getAccessToken();
    if (accessToken) {
      const parsedToken = parseJWTPayload(accessToken);
      const { exp } = parsedToken;
      if (!exp) {
        hasAccessTokenExpired = true;
      } else {
        const now = Math.floor(Date.now() / 1000);
        hasAccessTokenExpired = exp < now;
      }
      return !hasAccessTokenExpired;
    } else {
      return false;
    }
  }

  getAccessToken() {
    return localStorage.getItem("creds");
  }

  getAccessTokenPayload() {
    const accessToken = this.getAccessToken();
    const parsedToken = parseJWTPayload(accessToken);
    return parsedToken;
  }
}

export default Authentication;
