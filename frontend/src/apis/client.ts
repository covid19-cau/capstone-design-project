import api from "./index";

export async function signIn(data: any) {
  try {
    const response = await api.post(`/login`, data);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function signUp(data: any) {
  try {
    await api.post(`/signup`, data);
    return {
      success: true,
    };
  } catch (err) {
    console.error(err);
  }
}
