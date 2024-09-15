"use server";
export const getData = async (link?: string) => {
  const data = await fetch(link ? link : "http://localhost:3000/").then((e) =>
    e.text()
  );
  console.log(data);
  return data;
};
