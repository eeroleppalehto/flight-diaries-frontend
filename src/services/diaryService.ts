import axios from "axios";
import { NonSensitiveDiaryEntry, NewDiaryEntry, DiaryEntry } from "../types";

const baseUrl = '/api/diaries';

const getAll = () => {
  return axios
    .get<NonSensitiveDiaryEntry[]>(baseUrl)
    .then(res => res.data);
};

const createDiary = (newEntry: NewDiaryEntry) => {
  return axios
    .post<DiaryEntry>(baseUrl, newEntry)
    .then(res => res.data)
}

export default { getAll, createDiary };