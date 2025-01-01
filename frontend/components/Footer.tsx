import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center text-primary/70 font-semibold py-6 border border-border border-t-2 min-h-full">
      <p>
        A project by&nbsp;
        <Link href="https://x.com/heet_2104" className="text-primary font-bold">
          Heet
        </Link>
        &nbsp;and&nbsp;
        <Link href="https://x.com/ni3rav" className="text-primary font-bold">
          Nirav
        </Link>
      </p>
      <Link
        href="https://github.com/HeetVekariya/DoctorDoom"
        className="text-primary font-bold"
      >
        Source Code
      </Link>
    </footer>
  );
}
