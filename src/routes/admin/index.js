import { h, Component } from "preact";
import Degree from "../../components/list_degree";

export default class Admin extends Component {
  state = {
    degree: [5, 6, 7, 8, 9, 10, 11, 12],
  };

  // Note: `user` comes from the URL, courtesy of our router
  render({}, state) {
    return (
      <section class="text-gray-700 body-font relative">
        <div class="container px-5 py-5 mx-auto">
          <Degree data={state.degree} />
        </div>
      </section>
    );
  }
}

