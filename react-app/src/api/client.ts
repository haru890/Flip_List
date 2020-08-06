// どんなURLを叩くか書く

import axios, { AxiosInstance, AxiosResponse } from 'axios';
// 変数を定義　AxiosInstという型　string, numberとかインスタンスがある
let client: AxiosInstance;

export default client = axios.create({
  baseURL: "https://jsondata.okiba.me/v1/json",
  headers: { "Content-Type": "application/json", },
});
// URL叩いてデータをどう扱うか
client.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    const data = response.data;
    return { ...response.data, data };
  }
);