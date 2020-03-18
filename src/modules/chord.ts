export class Chord {
  private labels: String[];
  private mod: string;
  constructor(...labels: any) {
    this.labels = [...labels];
    this.mod = "";
  }

  get val() {
    return this.labels[0] + this.mod;
  }

  get alt() {
    return this.labels[this.labels.length - 1] + this.mod;
  }
}

Chord.prototype.toString = function() {
  return "ssdfdsf";
};

