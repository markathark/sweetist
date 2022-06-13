import axios from "axios";

export const BASE_URL = "https://sweetist-app.herokuapp.com/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMWE4YTY3MjIzMzA5YjE2ZWZjMTM3ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTE4Mzk0OSwiZXhwIjoxNjQ5NDQzMTQ5fQ.ojN-3I7A-nUeXY7G_k0y1rtc-5T-YAOmWeFYANE9GN0";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
