// flipのデータを取りに行く

// AxiosPromise 非同期処理（Promise）
import { AxiosPromise } from 'axios';
import client from './client';
import { Flip } from '../models/flip';
// <>どんなデータがかえってくるか　　fetchFlipsデータをgetする
export const fetchFlips = (): AxiosPromise<Flip[]> => client.get("/y560b200807135237");