import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../store/Context";
const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { searchTerm } = useContext(AppContext);
  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });

  let content;
  if (response.data) {
    if (response.isLoading) {
      content = (
        <section className="image-container">
          <h4>Loading...</h4>
        </section>
      );
    }
    if (response.isError) {
      content = (
        <section className="image-container">
          <h4>something went wrong</h4>
        </section>
      );
    }
    const results = response.data.results;

    if (results.length < 1) {
      content = (
        <section className="image-container">
          <h2>No Results Found...</h2>
        </section>
      );
    }

    return (
      <section className="image-container">
        {results.map((item) => {
          const url = item?.urls?.regular;
          return (
            <img
              src={url}
              key={item.id}
              alt={item.alt_description}
              className="img"
            ></img>
          );
        })}
        {content}
      </section>
    );
  }
};
export default Gallery;
