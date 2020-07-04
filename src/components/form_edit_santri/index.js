import { h, Component } from "preact";
import linkState from "linkstate";

export default class FormEditSantri extends Component {
  state = {
    id: "",
    nama: "",
    kelas: "",
    umur: "",
    degree: ["paud", 5, 6, 7, 8, 9, 10, 11, 12],
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ nama: "", kelas: "", umur: "", tgl_lahir: "", nik: "" });
  };
  componentWillMount() {
    this.setState(this.props.user_profile);
  }

  render(props, state) {
    return (
      <form onSubmit={this.onSubmit}>
        <div class="bg-gray-200 rounded-lg p-10 flex flex-col mt-0 mb-10">
          <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
            Edit data santri
          </h2>
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-state"
          >
            Tanggal Lahir
          </label>
          <input
            class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
            placeholder="Tanggal"
            type="date"
            name="tgl_lahir"
            value={state.tgl_lahir}
            onInput={linkState(this, "tgl_lahir")}
          />

          <input
            class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
            placeholder="Nik / No santri"
            name="nik"
            type="text"
            value={state.nik}
            onInput={linkState(this, "nik")}
          />

          <input
            class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
            placeholder="Nama Santri"
            name="nama"
            type="text"
            value={state.nama}
            onInput={linkState(this, "nama")}
          />

          <select
            class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
            onChange={linkState(this, "kelas")}
            value={state.kelas}
            name="kelas"
          >
            <option></option>
            {this.state.degree.map((dg) => (
              <option value={dg}>Kelas {dg}</option>
            ))}
          </select>

          <input
            class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
            name="umur"
            placeholder="Umur"
            type="text"
            value={state.umur}
            onInput={linkState(this, "umur")}
          />
          <button
            type="submit"
            class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Simpan
          </button>
        </div>
      </form>
    );
  }
}
