export default function(data) {
  const format = data.split("T")[0].split("-");
  return `${format[2]}/${format[1]}/${format[0]}`;
}