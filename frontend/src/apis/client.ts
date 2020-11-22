import api from "./index";

export async function signOut(data: any) {
  try {
    await api.post(`/logoutPlease`, data);
    return {
      success: true
    };
  } catch (error) {
    console.error(error);
  }
}

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
      success: true
    };
  } catch (err) {
    console.error(err);
  }
}

export async function getContents(id: string = "1", category: string) {
  try {
    const response = await api.get(`/user/${id}/${category}`);
    return response.data;
  } catch (error) {}
}

export async function getChallenge(id: string) {
  try {
    const response = await api.get(`/user/challengeList/${id}`);
    return response.data;
  } catch (error) {}
}

export async function registerChallenge({ member_id, ...data }: any) {
  try {
    await api.post(`/user/applychallenge/${member_id}`, { ...data, member_id });
    return {
      success: true
    };
  } catch (err) {
    console.error(err);
  }
}

export async function checkChallenge(id: string, data: any) {
  try {
    await api.post(`/user/checkchallenge/${id}`, data);
    return {
      success: true
    };
  } catch (err) {
    console.error(err);
  }
}
