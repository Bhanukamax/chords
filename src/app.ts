import { Chord } from "./modules/chord";
import { NoteSet } from "./modules/NoteSet";

function bootstrap() {
  console.log("init code");
  console.log("init code");
  console.log("init code");
  console.log("init code");

  const c = new Chord("C#", "Bb");
  console.log(c.val);
  console.log(c.alt);

  const labels = [
    ["C"],
    ["C#", "Db"],
    ["D"],
    ["D#", "Eb"],
    ["E"],
    ["F"],
    ["F#", "Gb"],
    ["G"],
    ["G#", "Ab"],
    ["A"],
    ["A#", "Bb"],
    ["B"]
  ];

  const noteSet = new NoteSet(labels);
  console.log(noteSet.getNote(2));
}

bootstrap();
