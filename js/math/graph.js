class Graph {
  constructor(points = [], segments = []) {
    this.points = points;
    this.segments = segments;
  }
  //   segment methods
  tryAddSegment(seg) {
    if (
      !this.pointsLength() <= 0 &&
      !this.containsSegment(seg) &&
      !seg.p1.equals(seg.p2)
    ) {
      console.log("called");
      this.addSegment(seg);
      return true;
    }
    return false;
  }
  removeSegment(seg) {
    this.segments.splice(this.segments.indexOf(seg), 1);
  }
  getSegmentsWithPoints(point) {
    const segs = [];
    for (const seg of this.segments) {
      if (seg.includesPoint(point)) {
        segs.push(seg);
      }
    }
    return segs;
  }
  segmentsLength() {
    return this.segments.length;
  }

  containsSegment(seg) {
    return this.segments.find((e) => e.equals(seg));
  }
  addSegment(seg) {
    this.segments.push(seg);
  }
  //   points methods
  tryAddPoint(point) {
    if (!this.containsPoint(point)) {
      this.addPoint(point);
      return true;
    }
    return false;
  }
  removePoint(point) {
    const segs = this.getSegmentsWithPoints(point);
    for (const seg in segs) {
      this.removeSegment(seg);
    }
    this.points.splice(this.points.indexOf(point), 1);
  }
  addPoint(point) {
    this.points.push(point);
  }
  containsPoint(point) {
    return this.points.find((e) => e.equals(point));
  }
  pointsLength() {
    return this.points.length;
  }

  //   draw /graph
  dispose() {
    this.points.length = 0;
    this.segments.length = 0;
  }
  draw(ctx) {
    for (const segtment of this.segments) {
      segtment.draw(ctx);
    }
    for (const point of this.points) {
      point.draw(ctx);
    }
  }
}
