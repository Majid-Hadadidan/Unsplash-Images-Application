import { useContext } from "react";
import { AppContext } from "../store/Context";

const SearchForm = () => {
  const { setSearchTerm } = useContext(AppContext);

  function handleSubmit(e) {
    e.preventDefault();
    const searchValue = e.target[0].value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
  }
  return (
    <section>
      <h1 className="title">Unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
