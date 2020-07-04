import { h } from "preact";
import { Link } from "preact-router/match";

const Degree = (props) => (
  <section class="text-gray-700 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Daftar Kelas
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Klik salah satu santri untuk mengubah data santri dan memberikan
          penilaian.
        </p>
      </div>
      <div class="flex flex-wrap -m-2">
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
          <Link href={"/santris/paud"}>
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">Kelas Paud</h2>
              </div>
            </div>
          </Link>
        </div>

        {props.data.map((degree) => (
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <Link href={"/santris/" + degree}>
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Umur {degree} Tahun
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Degree;
