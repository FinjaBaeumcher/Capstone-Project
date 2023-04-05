import EmojiButton from "../../components/EmojiButton";
import InputField from "../../components/InputField";
import { useRouter } from "next/router";
import { useState } from "react";

export default function EvaluationForm({ moods, setMoods }) {
  const router = useRouter();
  const [mood, setMood] = useState("");
  const [body, setBody] = useState("");
  const [duration, setDuration] = useState("");
  const [error, setError] = useState("");

  function handleSave() {
    if (!mood || !body) {
      setError(
        "Bitte schätze deine Stimmung und dein körperliches Wohlbefinden ein!"
      );
      return;
    }
    if (!duration) {
      setError("Bitte gebe die Zeit an, die du Yoga gemacht hast");
      return;
    }

    const currentDate = new Date().toLocaleDateString();
    setMoods([...moods, { mood, body, duration, date: currentDate }]);
    router.push(`/progress-list`);
  }

  function handleMoodChange(newMood) {
    setMood(newMood);
  }

  function handleBodyChange(newBody) {
    setBody(newBody);
  }

  function handleTimeChange(event) {
    const input = event.target.value;
    if (input < 0 || isNaN(input)) {
      setError("Gebe eine positive Zahl ein");
      setDuration("");
      return;
    }
    const limit = 3;
    setDuration(input.slice(0, limit));
    setError("");
  }

  return (
    <>
      <h2>Wie war die Session?</h2>
      <h3>Wie ist deine Stimmung heute?</h3>
      <EmojiButton emoji="😤" onChange={handleMoodChange} />
      <EmojiButton emoji="😭" onChange={handleMoodChange} />
      <EmojiButton emoji="😩" onChange={handleMoodChange} />
      <EmojiButton emoji="☹️" onChange={handleMoodChange} />
      <EmojiButton emoji="😕" onChange={handleMoodChange} />
      <EmojiButton emoji="🙂" onChange={handleMoodChange} />
      <EmojiButton emoji="😊" onChange={handleMoodChange} />
      <EmojiButton emoji="😁" onChange={handleMoodChange} />
      <EmojiButton emoji="🥳" onChange={handleMoodChange} />
      <p>{mood}</p>

      <h3>Wie fühlt sich dein Körper?</h3>
      <EmojiButton emoji="😤" onChange={handleBodyChange} />
      <EmojiButton emoji="😭" onChange={handleBodyChange} />
      <EmojiButton emoji="😩" onChange={handleBodyChange} />
      <EmojiButton emoji="☹️" onChange={handleBodyChange} />
      <EmojiButton emoji="😕" onChange={handleBodyChange} />
      <EmojiButton emoji="🙂" onChange={handleBodyChange} />
      <EmojiButton emoji="😊" onChange={handleBodyChange} />
      <EmojiButton emoji="😁" onChange={handleBodyChange} />
      <EmojiButton emoji="🥳" onChange={handleBodyChange} />
      <p>{body}</p>
      <form>
        <InputField
          htmlFor="time"
          name="time"
          type="number"
          id="time"
          onChange={handleTimeChange}
          value={duration}
        >
          Wie lange habe ich durchgehalten:
        </InputField>
        <p>Minuten</p>
      </form>
      <button type="submit" onClick={handleSave}>
        Speichern
      </button>

      {error && <p>{error}</p>}
    </>
  );
}
