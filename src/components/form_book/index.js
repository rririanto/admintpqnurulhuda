import { h, Component } from "preact";
import linkState from "linkstate";

export default class BookForm extends Component {
  state = {
    kelas: "",
    degree: ["paud", "5", "6", "7", "8", "9", "10", "11", "12"],
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state, this.props.santris);
    this.setState({ kelas: "" });
  };

  render(props, state) {

    return (
      <form onSubmit={this.onSubmit}>
        <div class="lg:w-2/4 md:w-2/3 mx-auto bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
            Tambah Buku Penilaian Ajaran Baru
          </h2>
          <select
            class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
            onChange={linkState(this, "kelas")}
            value={state.kelas}
            name="kelas"
          >
            <option></option>
            {this.state.degree.map((dg) => {
              if (!props.degree.includes(dg)) {
                return <option value={dg}>Kelas {dg}</option>;
              }
            })}
          </select>
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
