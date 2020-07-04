import { h } from "preact";

const SantriAssesment = (props) => (
  <section class="text-gray-700 body-font">
    <div class="container py-30 mx-auto">
     { props.assessments.map (book => (
      <div class="flex mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
        <div class="flex-grow sm:text-left mt-6 sm:mt-0">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
            Tanggal {book.tanggal}
          </h2>
          <p class="leading-relaxed text-base">
            <b>Materi:</b> {book.materi}
          </p>
          <p class="leading-relaxed text-base">
            <b>Pencapaian:</b> {book.pencapaian}
          </p>
          <p class="leading-relaxed text-base">
            <b>Wali Kelas:</b> {book.wali_kelas}
          </p>
          {props.admin && <a class="mt-3 text-red-500 inline-flex items-center" href="#" onClick={() => props.OnDelete(book.id)}>Hapus</a>}
        </div>
      </div>
     ))}
      
    </div>
  </section>
);

export default SantriAssesment;
