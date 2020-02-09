//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(h, w, l) {
    this.h = h;
    this.w = w;
    this.l = l;
  }

  isEquilateral() {
    // if (this.h === 0 && this.w === 0 && this.l === 0) {
    //   return false;
    // }
    if (this.degenerate()) return false
    return this.h === this.w && this.w === this.l;
  }

  isIsosceles() {
    if (this.degenerate()) return false 
    return this.h === this.w || this.w === this.l || this.l === this.h;
  }

  isScalene() {
    if (this.degenerate()) return false
    return this.h !== this.w && this.w !== this.l && this.l != this.h;
  }

  degenerate() {
    return ((this.h + this.w <= this.l) || (this.h + this.l <= this.w) || this.w + this.l <= this.h)
  }
}
