import {ServerLoad} from "../types/server";

export const getServerLoad = async (id: number): Promise<ServerLoad> => {
  return fetch(`http://localhost:8000/status/${id}`).then((res) => {
    return res.json();
  });
};
