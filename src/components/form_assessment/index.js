import { h, Component } from "preact";
import linkState from "linkstate";

export default class FormAssessment extends Component {
  state = { tanggal: "", materi: "", pencapaian: "", wali_kelas: "" };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state, this.props.bookid);
    this.setState({ tanggal: "", materi: "", pencapaian: "" });
  };
  render(props, state) {
    return (
      <form onSubmit={this.onSubmit}>
        <div class="mx-auto mb-10">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-full">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Tambahkan Penilaian
              </label>
              <input
                class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
                placeholder="Tanggal"
                type="date"
                name="tanggal"
                value={state.nama}
                onInput={linkState(this, "tanggal")}
              />
              <input
                class="bg-white w-full rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
                placeholder="Wali kelas"
                type="text"
                name="wali_kelas"
                value={state.wali_kelas}
                onInput={linkState(this, "wali_kelas")}
              />
              <textarea
                class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-30 focus:border-green-500 text-base px-4 py-2 resize-none block"
                placeholder="Materi"
                name="materi"
                value={state.materi}
                onInput={linkState(this, "materi")}
              ></textarea>
            </div>
            <div class="p-2 w-full">
              <textarea
                class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-30 focus:border-green-500 text-base px-4 py-2 resize-none block"
                placeholder="Pencapaian"
                name="pencapaian"
                value={state.pencapaian}
                onInput={linkState(this, "pencapaian")}
              ></textarea>
            </div>
            <div class="p-2 w-full">
              <button
                type="submit"
                class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
