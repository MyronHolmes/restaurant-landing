import { IoChevronUp } from "react-icons/io5";

export default function Header() {
  return (
         <header>
        <a
          href="#top"
          className="fixed right-5 bottom-5 z-50 flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 shadow-md hover:shadow-lg hover:border-red-500 transition"
        >
          <IoChevronUp className="text-red-500 text-2xl" />
        </a>
      </header>
  )
}
