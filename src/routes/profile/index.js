import { h, Component } from "preact";
import UserProfile from "../../components/santri_profile";
import FormEditSantri from "../../components/form_edit_santri";
import Book from "../../components/list_book";
import BookForm from "../../components/form_book";
import ButtonBack from "../../components/button_back";

export default class Profile extends Component {
  state = {
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

  render({}, { books, user_profile, degree, edit }) {
    return (
      <section class="text-gray-700 body-font">
        <ButtonBack url={"/santris/" + user_profile.kelas}/>
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
