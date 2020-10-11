import api from "./index";

export async function getRecommendContents(category: string) {
  console.log(category);
  try {
    const response = await api.get(`/admin/${category}`);
    console.log(response);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function registerRecommendContents(data: any) {
  try {
    const response = await api.get(`/admin/`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getUserLists(category: string) {}
