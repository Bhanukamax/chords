import { Chord } from "./chord";

export class NoteSet {
  private notes: Array<Chord>;
  constructor(labels: any) {
    this.notes = labels.map((label: any) => new Chord(...label));
  }

  public getNote(index: number) {
    return this.notes[index].val;
  }
}
