export default function ResultCalculator(answers) {
  const first = answers[0] + answers[1];
  const second = answers[2] + answers[3];
  const third = answers[4] + answers[5];

  const results = [];
  if (first <= 3) results.push("A");
  else results.push("O");
  if (second <= 3) results.push("M");
  else results.push("D");
  if (third <= 3) results.push("S");
  else results.push("R");

  return { scores: [first, second, third], results: results };
}
