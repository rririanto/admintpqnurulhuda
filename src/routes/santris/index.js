import { h, Component } from "preact";
import SantriList from "../../components/list_santri";
import FromAddSantri from "../../components/form_addsantri";
import ButtonBack from "../../components/button_back";

export default class Users extends Component {
  state = {
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
    this.setState({ list_santri: resp });
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
  render({}, state) {
    return (
      <section class="text-gray-700 body-font">
        <ButtonBack url="/"/>
        <div class="container">
          {state.list_santri && <SantriList data={state.list_santri} />}
          <FromAddSantri onSubmit={this.addNewItem} />
        </div>
      </section>
    );
  }
}
