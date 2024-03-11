const colors = [
  "border-red-500 bg-red-500",
  "border-blue-500 bg-blue-500",
  "border-green-500 bg-green-500",
  "border-yellow-500 bg-yellow-500",
  "border-purple-500 bg-purple-500",
  "border-indigo-500 bg-indigo-500",
  "border-pink-500 bg-pink-500",
  "border-teal-500 bg-teal-500",
  "border-orange-500 bg-orange-500",
  "border-gray-500 bg-gray-500",
];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

export default getRandomColor;