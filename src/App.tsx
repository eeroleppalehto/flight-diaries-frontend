import React, { useEffect, useState } from 'react';
import './App.css';
import diaryService from './services/diaryService';
import { NewDiaryEntry, NonSensitiveDiaryEntry } from './types';
import Diaries from './components/Diaries';
import DiaryForm from './components/DiaryForm';
import toNonSensitiveDiaryEntry from './utils/toNonSensitiveDiary';

const App = () => {
  const [diaries, setDiaries] = useState<NonSensitiveDiaryEntry[]>([]);

  useEffect(() => {
    diaryService
      .getAll()
      .then(data => setDiaries(data));
  }, [])

  const addDiary = (newDiary: NewDiaryEntry) => {
    diaryService
      .createDiary(newDiary)
      .then(responseDiary => setDiaries([...diaries, toNonSensitiveDiaryEntry(responseDiary)]))
  };

  return (
    <>
      <h1>Hello</h1>
      <Diaries diaryList={diaries}/>
      <DiaryForm addDiary={addDiary}/>
    </>
  )
};

export default App;
