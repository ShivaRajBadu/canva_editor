function distance(p1, p2) {
  return Math.hypot(p1.x - p2.x, p1.y - p2.y);
}

function getNearestPoint(loc, points, threshold = Number.MAX_SAFE_INTEGER) {
  let minDistance = Number.MAX_SAFE_INTEGER;
  let nearest = null;
  for (const point of points) {
    const distance = this.distance(point, loc);
    if (distance < minDistance && distance < threshold) {
      minDistance = distance;
      nearest = point;
    }
  }
  return nearest;
}
