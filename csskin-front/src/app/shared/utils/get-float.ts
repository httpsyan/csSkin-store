export const getFloatColor = (float: number) => {
  if (float <= 0.15) return "green";
  if (float <= 0.4) return "yellow";
  return "red";
};
