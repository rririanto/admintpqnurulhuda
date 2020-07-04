import { h } from "preact";
import { Link } from "preact-router/match";

const ButtonBack = (props) => (
  <div class="inline-flex lg:justify-end ml-5 lg:ml-0">
    <Link
      href={props.url}
      class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
    >
      <svg
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        class="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M19 12H5m7 7l-7-7 7-7"></path>
      </svg>
      Kembali
    </Link>
  </div>
);

export default ButtonBack;
