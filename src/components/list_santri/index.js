import { h } from "preact";
import { Link } from 'preact-router/match';

const SantriList = (props) => (
  <section class="text-gray-700 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Daftar Santri
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Klik salah satu santri untuk mengubah data santri dan memberikan
          penilaian.
        </p>
      </div>
      <div class="flex flex-wrap -m-2">
        { props.data.map (user => (
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
          <Link href={'/profile/' + user.id}>
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">
                  {user.nama}
                </h2>
                <p class="text-gray-500">Kelas {user.kelas}</p>
              </div>
            </div>
          </Link>
        </div>
        ))}
      </div>
    </div>
  </section>
);

export default SantriList;
