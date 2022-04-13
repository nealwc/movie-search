import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=d3647631";

const Search = query => {
    let searchCriteria = BASEURL + query + APIKEY;
    console.log(searchCriteria);
    return axios.get(BASEURL + query + APIKEY);
};

export default Search

