import Heading from "../components/Heading";
import RandomPoses from "../components/RandomPoses";
import Link from "next/link";

export default function Home({ poses }) {
  return (
    <main>
      <Heading>Yoga App</Heading>
      <Link href="/progress-list">Meine Stimmungen</Link>
      <p>Wähle eine Peak Pose:</p>
      <RandomPoses poses={poses} />
    </main>
  );
}
