import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=150&nat=us";

export default {
  search: function () {
    return axios.get(BASEURL);
  },
};

// import axios from "axios";

// export default {
//     // Gets all users
//     getUsers: function() {
//       return axios.get("https://randomuser.me/api/?results=200&nat=us");
//     }
//   };