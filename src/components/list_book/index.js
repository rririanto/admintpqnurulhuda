import { h } from "preact";
import { Link } from 'preact-router/match';

const Book = (props) => (
    <section class="text-gray-700 body-font">
    <div class="container px-5 py-0 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Klik atau tambahkan salah satu buku kelas untuk memberikan penilaian terhadap santri.  
        </p>
      </div>
      <div class="flex flex-wrap -m-2 mb-20">
        { props.data.map (book => (
        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
          <Link href={'/book/' + book.id}>
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">
                  Buku Kelas {book.kelas}
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

export default Book;
