import { DiaryEntry, NonSensitiveDiaryEntry } from './../types';

const toNonSensitiveDiaryEntry = (diaryEntry: DiaryEntry): NonSensitiveDiaryEntry => {
  return {
    id: diaryEntry.id,
    date: diaryEntry.date,
    weather: diaryEntry.weather,
    visibility: diaryEntry.visibility,
  }
};

export default toNonSensitiveDiaryEntry;