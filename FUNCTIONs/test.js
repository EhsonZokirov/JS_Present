function inc(i) {
  if (i < 10) {
    return 1;
  }
  return inc(i + 1);
}

console.log(inc(1));
