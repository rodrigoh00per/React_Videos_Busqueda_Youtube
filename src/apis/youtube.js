import Axios from "axios";

const KEY = "AIzaSyBXAyimeyDQaq0xckMpjEG4NzYGJR_XTbg";

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: KEY,
    maxResults: 5,
    part: "snippet"
  }
});
