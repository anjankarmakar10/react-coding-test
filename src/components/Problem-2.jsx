import React, { useState, useMemo, useCallback } from "react";
import AppModal from "./AppModal";
import FilteredContainer from "./FilteredContainer";
import Search from "./Search";
import ContactsTable from "./ContactsTable";
import ModalButtons from "./ModalButtons";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import debounce from "../lib/debounce";
const Problem2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modelTitle, setModalTitle] = useState("");

  const [filters, setFilters] = useState({
    search: "",
    country: "All",
    isEven: false,
  });

  const { data, loadMore, hasMore, loading, error } = useInfiniteScroll();

  const handleModalA = () => {
    setIsOpen(true);
    setModalTitle("Modal A");
    window.history.pushState(null, "", "/modal-a");
  };
  const handleModalB = () => {
    setIsOpen(true);
    setModalTitle("Modal B");
    window.history.pushState(null, "", "/modal-b");
    setFilters((prev) => {
      return { ...prev, country: "United States" };
    });
  };

  const filteredContacts = useMemo(() => {
    return data
      ?.filter((item) =>
        item?.country?.name
          ?.toLowerCase()
          .includes(filters.search.toLowerCase())
      )
      .filter((item) =>
        filters.country === "All"
          ? item
          : item?.country?.name === filters.country
      )
      .filter((item) => (filters.isEven ? item?.id % 2 === 0 : item));
  }, [data, filters]);

  // This `handleSearch` function is implemented using a debounce technique to optimize input events.
  // It ensures that the search query is updated with a minimal delay after the user stops typing,
  const handleSearch = useCallback(
    debounce((e) => {
      e.preventDefault();
      const value = e.target.value;
      setFilters((prev) => {
        return { ...prev, search: value };
      });
    }, 1),
    []
  );

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <ModalButtons handleModalA={handleModalA} handleModalB={handleModalB} />

        <AppModal title={modelTitle} isOpen={isOpen} setIsOpen={setIsOpen}>
          <div style={{ maxHeight: "400px", overflow: "auto" }} className="p-4">
            <Search handleSearch={handleSearch} />

            <FilteredContainer filters={filters} setFilters={setFilters} />

            {filteredContacts?.length === 0 ? (
              <div className="my-2">No contact found</div>
            ) : (
              <ContactsTable filteredContacts={filteredContacts} />
            )}
            <div style={{ marginBottom: "-1rem" }} className="d-flex">
              <button
                className="btn btn-dark mx-auto d-flex align-items-center gap-2"
                disabled={!hasMore}
                onClick={loadMore}
              >
                {loading && (
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                  ></span>
                )}
                Load More
              </button>
            </div>
          </div>
        </AppModal>
      </div>
    </div>
  );
};

export default React.memo(Problem2);
