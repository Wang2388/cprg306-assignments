import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p className="text-3xl font-bold m-2">Shopping List</p>
      <Link href= "week-3/" className = "text-2xl m-3">Week 3</Link> <br/>
      <Link href= "week-4/" className = "text-2xl m-3">Week 4</Link>
    </main>
  );
}
