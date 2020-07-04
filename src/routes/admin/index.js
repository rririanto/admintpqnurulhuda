import { h, Component } from "preact";
import Degree from "../../components/list_degree";

export default class Admin extends Component {
  state = {
    loading: true,
    degree: [5, 6, 7, 8, 9, 10, 11, 12],
    list_santri: []
  };
  fetchData = async (data) => {
    let options = {
      method: data.method,
      ...(data.body && { body: data.body }),
    };
    let response = await fetch(data.url, options);
    return data.return_type == "json" ? await response.json() : true;
  };

  getSantri = async () => {
    let data = {
      url: `https://api-tpq1-nurulhuda.herokuapp.com/santris`,
      method: "GET",
      return_type: "json",
    };
    let resp = await this.fetchData(data);
    this.setState({ list_santri: resp, loading: false });
  };

  componentWillMount() {
    this.getSantri()
  }

  
  addNewItem = async (formData) => {
    const {nama, kelas, umur} = formData
    let data = {
      url: `https://api-tpq1-nurulhuda.herokuapp.com/santris`,
      method: "POST",
      return_type: "json",
      body: JSON.stringify({nama, kelas, umur})
    };
    let resp = await this.fetchData(data);
    this.setState((prevState) => ({
      list_santri: [...prevState.list_santri, resp],
    }));
  };

  // Note: `user` comes from the URL, courtesy of our router
  render() {
    const {list_santri} = this.state
    return (
      <section class="text-gray-700 body-font relative">
        <div class="container px-5 py-5 mx-auto">
          <Degree data={this.state.degree} />
        </div>
      </section>
    );
  }
}

