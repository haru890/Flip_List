// tabのデータを取りに行く

// AxiosPromise 非同期処理（Promise)
import { AxiosPromise } from 'axios';
import client from './client';
import { Tab } from '../models/tab';

export const fetchTabs = (): AxiosPromise<Tab[]> => client.get("/UvDGk200806125956");