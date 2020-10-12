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

export async function registerRecommendContents(data: any) {
  try {
    const response = await api.get(`/admin/`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getUserLists(category: string) {}
