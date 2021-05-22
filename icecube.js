class IceCube {
  constructor(x, y, s, alpha, r) {
    this.s = s;
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.r = r;
    this.alpha = alpha;
  }

  applyGravity(force) {
    this.acc.add(force);
  }

  edges() {
    if (this.pos.y >= height - waterLevel - (this.s / 2)) {
      this.pos.y = height - waterLevel - (this.s / 2);
      this.vel.y *= 0;
    }
  }
  applyCurrent(force) {
    this.acc.sub(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show(control) {
    stroke(225, 245, 254, this.alpha);
    strokeWeight(this.r);
    fill(49, 129, 248, this.alpha);
    line(this.pos.x + this.s - 3, this.pos.y + this.s - 3, this.pos.x + (this.s / 2), this.pos.y + this.s - 3);
    rect(this.pos.x, this.pos.y, this.s, this.s, 5);
    strokeWeight(this.r - 2);
    stroke(128, 216, 255, this.alpha);
    line(this.pos.x + this.s - 7, this.pos.y + this.s - 7, this.pos.x + (this.s / 2.5), this.pos.y + this.s - 7);
    line(this.pos.x + this.s - 7, this.pos.y + this.s - 7, this.pos.x + this.s - 7, this.pos.y + (this.s / 2.5));
    if (control) {
      strokeWeight(this.r);
      stroke(178, 235, 242, this.alpha);
      line(this.pos.x + (this.s / 4), this.pos.y, this.pos.x + (this.s / 8), this.pos.y + (this.s / 4));
      line(this.pos.x + (this.s / 8), this.pos.y + (this.s / 4), this.pos.x + (this.s / 4), this.pos.y + (this.s / 2));
      line(this.pos.x + (this.s / 4), this.pos.y + (this.s / 2), this.pos.x + (this.s / 8), this.pos.y + (this.s * (3 / 4)))
      line(this.pos.x + (this.s / 4), this.pos.y + (this.s / 2), this.pos.x + (this.s / 2), this.pos.y + (this.s / 2))

    }
  }

  dissolve() {
    this.alpha = this.alpha - 1;
    if (this.alpha <= 0) {
      this.alpha = 0;
    }
  }
}