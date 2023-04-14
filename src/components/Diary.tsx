import { NonSensitiveDiaryEntry } from "../types";

/* interface DiaryProp {
  diaryEntry: NonSensitiveDiaryEntry;
} */

const Diary = ({diary}: {diary: NonSensitiveDiaryEntry}) => {
  return (
    <>
    <li>
      <h2>{diary.date}</h2>
      <p>Weather: {diary.weather}</p>
      <p>Visibility: {diary.visibility}</p>
    </li>
    </>
  )
}

export default Diary;