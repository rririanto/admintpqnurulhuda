import { h, Component } from "preact";
import { Link } from "preact-router/match";
import FormAssessment from "../../components/form_assessment";
import SantriAssesment from "../../components/list_assessment";

export default class BookSantri extends Component {
  state = {
    loading: true,
    assessments: [],
    santris_id: null,
  };

  fetchData = async (data) => {
    let options = {
      method: data.method,
      ...(data.body && { body: data.body }),
    };
    let response = await fetch(data.url, options);
    return data.return_type == "json" ? await response.json() : true;
  };

  getBookMaster = async (id) => {
    let data = {
      url: `https://api-tpq1-nurulhuda.herokuapp.com/books/${id}`,
      method: "GET",
      return_type: "json",
    };
    let resp = await this.fetchData(data);
    this.setState({ assessments: resp.assessments, santris_id: resp.santris.id, loading: false });
  };

  componentWillMount() {
    this.getBookMaster(this.props.id);
  }

  addNewItem = async (formData, book) => {
    const { tanggal, materi, pencapaian, wali_kelas } = formData;
    let data = {
      url: `https://api-tpq1-nurulhuda.herokuapp.com/assessments`,
      method: "POST",
      return_type: "json",
      body: JSON.stringify({ book, tanggal, materi, pencapaian, wali_kelas }),
    };
    let resp = await this.fetchData(data);
    this.setState((prevState) => ({
      assessments: [resp, ...prevState.assessments],
    }));
  };

  OnDelete = async (id) => {
    let data = {
      url: `https://api-tpq1-nurulhuda.herokuapp.com/assessments/${id}`,
      method: "DELETE",
      return_type: "json",
    };
    let resp = await this.fetchData(data);
    this.setState({
      assessments: [...this.state.assessments.filter((item) => item.id !== id)],
    });
    //this.setState({ assessments: resp.assessments, loading: false });
  };

  // Note: `user` comes from the URL, courtesy of our router
  render(props, { assessments, santris_id }) {
    return (
      <section class="text-gray-700 body-font relative">
        <div class="inline-flex lg:justify-end ml-5 lg:ml-0 mb-10">
          <Link
            href={"/profile/" + santris_id}
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
        <div class="container px-5 py-5 mx-auto">
          <FormAssessment onSubmit={this.addNewItem} bookid={props.id} />
          {assessments && (
            <SantriAssesment
              assessments={assessments}
              admin={true}
              OnDelete={this.OnDelete}
            />
          )}
        </div>
      </section>
    );
  }
}
