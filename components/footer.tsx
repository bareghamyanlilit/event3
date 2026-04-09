import Link from "next/link"; 

export function Footer() {
  return (
    <footer className="FontArmDecorativeU bottom-0 py-10 text-center text-[#4b4b4b]  bg-[#F4F4F4] ">
      
      <Link href="https://www.instagram.com/siteup.am/">
        <p className="mt-2 text-base">
          Պատրաստվել է <span className="underline">siteup.am</span> -ի  կողմից 
        </p>
      </Link>
    </footer>
  );
}
