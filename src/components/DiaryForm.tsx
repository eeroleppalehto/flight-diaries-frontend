import { Visibility, Weather, NewDiaryEntry } from "../types";
import { useState } from "react";

type additionFunction = (a: NewDiaryEntry) => void;

const DiaryForm = ({ addDiary }: { addDiary: additionFunction }) => {
  const currentDate = (new Date).toISOString().slice(0, 10);
  const [commentText, setCommentText] = useState('');
  const [date, setDate] = useState<string>(currentDate);
  
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const newDiaryEntry: NewDiaryEntry = {
      date: date,
      weather: weather as Weather,
      visibility: visibility as Visibility,
      comment: commentText
    }

    addDiary(newDiaryEntry);
    setDate(currentDate);
    setCommentText('');
  };
  
  const weathers = Object
    .values(Weather)
    .map(weather => weather.toString());

  const weatherOptions = weathers
    .map(weather => <option key={weather} value={weather}>{weather.toString()}</option>)
  

  const [weather, setWeather] = useState(weathers[0]);

  const visibilities = Object
  .values(Visibility)
  .map(visibility => visibility.toString())
  
  const visibilityOptions = visibilities
    .map(visibility => <option key={visibility} value={visibility}>{visibility}</option>)
  
  const [visibility, setVisibility] = useState(visibilities[0]);
    
  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="Date">Date</label><br />
      <input type="date" value={date} name="Date" onChange={event => setDate(event.target.value)}/><br />
      <label htmlFor="weather">Weather</label><br />
      <select name="weather" value={weather} onChange={event => setWeather(event.target.value)}>
        {weatherOptions}
      </select><br />
      <label htmlFor="visibility">Visibility</label><br />
      <select name="visibility" value={visibility} onChange={event => setVisibility(event.target.value)}>
        {visibilityOptions}
      </select><br />
      <label htmlFor="comment">Comment</label><br />
      <textarea 
        value={commentText}
        name="comment"
        cols={30} rows={10}
        onChange={event => setCommentText(event.target.value)}>
      </textarea><br />
      <button type="submit">Add Diary Entry</button>
    </form>
  )
}

export default DiaryForm;