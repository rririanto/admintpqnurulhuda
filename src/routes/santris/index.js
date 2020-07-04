import { h, Component } from "preact";
import { Link } from "preact-router/match";

import SantriList from "../../components/list_santri";
import SantriForm from "../../components/form_addsantri";

export default class Users extends Component {
  state = {
    loading: true,
    list_santri: [],
  };
  fetchData = async (data) => {
    let options = {
      method: data.method,
      ...(data.body && { body: data.body }),
    };
    let response = await fetch(data.url, options);
    return data.return_type == "json" ? await response.json() : true;
  };

  getSantri = async (id) => {
    let data = {
      url: `https://api-tpq1-nurulhuda.herokuapp.com/santris?kelas=${id}`,
      method: "GET",
      return_type: "json",
    };
    let resp = await this.fetchData(data);
    this.setState({ list_santri: resp, loading: false });
  };

  componentWillMount() {
    this.getSantri(this.props.id);
  }

  addNewItem = async (formData) => {
    const { nama, umur, tgl_lahir, nik } = formData;
    const kelas = this.props.id;
    let data = {
      url: `https://api-tpq1-nurulhuda.herokuapp.com/santris`,
      method: "POST",
      return_type: "json",
      body: JSON.stringify({ nama, kelas, umur, tgl_lahir, nik }),
    };
    let resp = await this.fetchData(data);
    this.setState((prevState) => ({
      list_santri: [...prevState.list_santri, resp],
    }));
  };

  // Note: `user` comes from the URL, courtesy of our router
  render(props) {
    const { list_santri } = this.state;
    return (
      <section class="text-gray-700 body-font">
        <div class="inline-flex lg:justify-end ml-5 lg:ml-0">
          <Link
            href="/"
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
        <div class="container">
          {list_santri && <SantriList data={this.state.list_santri} />}
          <SantriForm onSubmit={this.addNewItem} />
        </div>
      </section>
    );
  }
}
