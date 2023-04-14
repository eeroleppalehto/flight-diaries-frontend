import { NonSensitiveDiaryEntry } from "../types";
import Diary from "./Diary";

/* interface DiariesProps {
  diaryList: NonSensitiveDiaryEntry[];
} */

const Diaries = ({diaryList}: {diaryList: NonSensitiveDiaryEntry[]}) => {
  const diaries = diaryList.map(diary => <Diary key={diary.id} diary={diary}/>);

  return (
    <>
    <ul>{diaries}</ul>
    </>
  );
};

export default Diaries;