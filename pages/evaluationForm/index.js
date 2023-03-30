import EmojiButtons from "../../components/EmojiButton";

export default function Rating() {
  return (
    <>
      <h2>Wie ist deine Stimmung heute?</h2>
      <EmojiButtons />
      <h2>Wie fühlt sich dein Körper?</h2>
      <EmojiButtons />
    </>
  );
}
