import { h, Component } from "preact";
import { Link } from "preact-router/match";

import UserProfile from "../../components/santri_profile";
import FormEditSantri from "../../components/form_edit_santri";
import Book from "../../components/book";
import BookForm from "../../components/form_book";

export default class Profile extends Component {
  state = {
    loading: true,
    edit: false,
    degree: [],
    user_profile: [],
    books: [],
    assessments: [],
  };

  fetchData = async (data) => {
    let options = {
      method: data.method,
      json: true,
      ...(data.body && { body: data.body }),
    };
    let response = await fetch(data.url, options);
    return data.return_type == "json" ? await response.json() : true;
  };

  getProfile = async (id) => {
    let data = {
      url: `https://api-tpq1-nurulhuda.herokuapp.com/santris/${id}`,
      method: "GET",
      return_type: "json",
    };
    let resp = await this.fetchData(data);
    let { books, ...restOf } = resp;
    const degree = books.map((item) => item.kelas);
    this.setState({
      user_profile: restOf,
      loading: false,
      books: books,
      degree: degree,
    });
  };

  addNewItem = async (formData, santris) => {
    const { kelas } = formData;
    let data = {
      url: `https://api-tpq1-nurulhuda.herokuapp.com/books`,
      method: "POST",
      return_type: "json",
      body: JSON.stringify({ santris, kelas }),
    };
    let resp = await this.fetchData(data);
    this.setState((prevState) => ({
      books: [resp, ...prevState.books],
    }));
  };

  editItem = async (formData) => {
    const { id, nama, kelas, umur, tgl_lahir, nik } = formData;
    let data = {
      url: `https://api-tpq1-nurulhuda.herokuapp.com/santris/${id}`,
      method: "PUT",
      return_type: "json",
      body: JSON.stringify({ id, nama, kelas, umur, tgl_lahir, nik }),
    };
    let resp = await this.fetchData(data);
    let { books, ...restOf } = resp;
    this.setState({ user_profile: restOf, edit: false });
  };

  handlerClick = () => {
    this.setState({ edit: !this.state.edit });
  };
  componentDidMount() {
    this.getProfile(this.props.user);
  }
  // Note: `user` comes from the URL, courtesy of our router
  render({ user }, { books, user_profile, degree, edit }) {
    return (
      <section class="text-gray-700 body-font">
        <div class="inline-flex lg:justify-end ml-5 lg:ml-0">
          <Link
            href={"/santris/" + user_profile.kelas}
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
        <div class="container px-5 py-0 mx-auto flex flex-col">
          <UserProfile
            user_profile={user_profile}
            handlerClick={this.handlerClick}
            edit={true}
          />
          {edit && (
            <FormEditSantri
              user_profile={user_profile}
              onSubmit={this.editItem}
            />
          )}
          {books && <Book data={books} admin={true} />}
          <BookForm
            onSubmit={this.addNewItem}
            santris={user_profile.id}
            degree={degree}
          />
        </div>
      </section>
    );
  }
}
