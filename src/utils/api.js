import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmUwNzRhOTI4NTFmYmFmNWE4ODMwYWQ2M2EwZjA3ZSIsInN1YiI6IjY2MzBmYWEwNmEzMDBiMDEyODYwOWU5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jf6XTP4P7Xj1FtkggYnHiC3DAix1CnERkUEUCjhfBYE",
  },
  params: {
    language: "tr-TR",
  },
});

export default api;
