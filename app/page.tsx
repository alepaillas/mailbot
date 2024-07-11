async function hello() {
  const res = await fetch("http://localhost:3000/api/hello", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return data;
}

export default async function Home() {
  const msg = await hello();
  return <div>hello {msg}</div>;
}
