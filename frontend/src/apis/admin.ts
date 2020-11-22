import { dataColumn } from "data";
import api from "./index";

export async function registerContents(category: dataColumn, data: any) {
  try {
    const response = await api.post(`/admin/${category}/add`, data);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function deleteContents(category: dataColumn, data: any) {
  try {
    const response = await api.delete(`/admin/${category}/delete/${data.id}`);

    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function updateContents(category: dataColumn, data: any) {
  try {
    const response = await api.put(
      `/admin/${category}/modify/${data.id}`,
      data
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
}
