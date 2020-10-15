import { dataColumn } from "data";
import api from "./index";

export async function getContents(category: dataColumn) {
  try {
    const response = await api.get(`/admin/${category}`);
    return response.data.map((data: any) => ({ ...data, key: data.id }));
  } catch (err) {
    console.error(err);
  }
}

export async function registerContents(category: dataColumn, data: any) {
  try {
    const response = await api.post(`/admin/${category}/add`, data);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getUserLists(category: string) {}
