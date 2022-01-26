export const formatterDate = (dateString: string) => {
  const dateTime = new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "numeric",
    day: "2-digit",
  });

  const format = dateTime.format(Date.parse(dateString));
  return format;
};

export const formatterDateAPI = (dateString: string) => {
  const [year, month, day] = dateString.split("-");

  return `${day}/${month}/${year}`;
};
