import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p className="text-3xl font-bold m-2">Shopping List</p>
      <Link href="week-3/" className="text-2xl m-3">
        Week 3
      </Link>
      <br />
      <Link href="week-4/" className="text-2xl m-3">
        Week 4
      </Link>
      <br />
      <Link href="week-5/" className="text-2xl m-3">
        Week 5
      </Link>
      <br />
      <Link href="week-6/" className="text-2xl m-3">
        Week 6
      </Link>
      <br />
      <Link href="week-7/" className="text-2xl m-3">
        Week 7
      </Link>
      <br />
      <Link href="week-8/" className="text-2xl m-3">
        Week 8
      </Link>
      <br />
      <Link href="week-9/" className="text-2xl m-3">
        Week 9
      </Link>
      <br />
      <Link href="week-10/" className="text-2xl m-3">
        Week 10
      </Link>
      <br />
    </main>
  );
}
