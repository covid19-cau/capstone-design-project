import { dataColumn } from "__MOCK__/mock";
import api from "./index";

export async function getRecommendContents(category: dataColumn) {
  try {
    const response = await api.get(`/admin/${category}`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function registerRecommendContents(
  category: dataColumn,
  data: any
) {
  try {
    const response = await api.post(`/admin/${category}/add`, data);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getUserLists(category: string) {}
