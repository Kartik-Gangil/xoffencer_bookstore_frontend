import { useState } from "react";

export default function BookLeftDetails() {

  const [activeAccordion, setActiveAccordion] = useState("collapseCategory");

  const [filters, setFilters] = useState({
    category: [],
    publisher: [],
    binding: [],
    paperSize: [],
    paperQuality: [],
    rating: [],
    price: 2.5,
  });

  // ---------- DATA ----------
  const categories = [
    "Engineering Entrance",
    "Medical Entrance",
    "Literature & Fiction",
    "History",
    "Science",
  ];

  const publishers = [
    "Starlight Press",
    "Quantum Book",
    "Heritage Publishing",
    "Crison Quill",
  ];

  const bindings = ["Paperback", "Hardcover", "Spiral Binding"];
  const paperSizes = ["A4", "A5", "B5"];
  const paperQuality = ["70GSM", "80GSM Matte", "120GSM Glossy"];
  const ratings = ["⭐⭐⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐", "⭐⭐", "⭐"];

  // ---------- HANDLERS ----------
  const handleCheckbox = (type, value) => {
    setFilters((prev) => {
      const exists = prev[type].includes(value);

      return {
        ...prev,
        [type]: exists
          ? prev[type].filter((v) => v !== value)
          : [...prev[type], value],
      };
    });
  };

  const handlePriceChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      price: e.target.value,
    }));
  };

  const renderCheckboxList = (list, type) =>
    list.map((item, i) => {
      const id = `${type}-${i}`;
      return (
        <div className="form-check" key={id}>
          <input
            className="form-check-input"
            type="checkbox"
            id={id}
            checked={filters[type].includes(item)}
            onChange={() => handleCheckbox(type, item)}
          />
          <label className="form-check-label" htmlFor={id}>
            {item}
          </label>
        </div>
      );
    });

  return (
    <div style={{ margin: 10, padding: 10 }}>
      <div className="accordion">

        <div className="text-center fs-5 fw-bold mb-3">Filters</div>

        <Accordion
          title="CATEGORIES"
          id="collapseCategory"
          activeAccordion={activeAccordion}
          setActiveAccordion={setActiveAccordion}
        >
          {renderCheckboxList(categories, "category")}
        </Accordion>

        {/* PRICE */}
        <div className="mt-3 mb-3">
          <label className="form-label fw-bold">
            PRICE : ₹{filters.price}K
          </label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="5"
            step="0.5"
            value={filters.price}
            onChange={handlePriceChange}
            style={{ accentColor: "blue" }}
          />
        </div>

        <Accordion
          title="PUBLISHER"
          id="collapsePublisher"
          activeAccordion={activeAccordion}
          setActiveAccordion={setActiveAccordion}
        >
          {renderCheckboxList(publishers, "publisher")}
        </Accordion>

        <Accordion
          title="BINDING TYPE"
          id="collapseBinding"
          activeAccordion={activeAccordion}
          setActiveAccordion={setActiveAccordion}
        >
          {renderCheckboxList(bindings, "binding")}
        </Accordion>

        <Accordion
          title="PAPER SIZE & QUALITY"
          id="collapsePaper"
          activeAccordion={activeAccordion}
          setActiveAccordion={setActiveAccordion}
        >
          <div className="fw-bold">Paper Size</div>
          {renderCheckboxList(paperSizes, "paperSize")}

          <div className="fw-bold mt-2">Paper Quality</div>
          {renderCheckboxList(paperQuality, "paperQuality")}
        </Accordion>

        <Accordion
          title="CUSTOMER RATING"
          id="collapseRating"
          activeAccordion={activeAccordion}
          setActiveAccordion={setActiveAccordion}
        >
          {renderCheckboxList(ratings, "rating")}
        </Accordion>

      </div>
    </div>
  );
}

// ---------- ACCORDION ----------
function Accordion({
  title,
  id,
  children,
  activeAccordion,
  setActiveAccordion,
}) {
  const isOpen = activeAccordion === id;

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${!isOpen ? "collapsed" : ""}`}
          type="button"
          onClick={() => setActiveAccordion(isOpen ? null : id)}
        >
          {title}
        </button>
      </h2>

      {/* React controls visibility */}
      <div
        className="accordion-collapse"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <div className="accordion-body">
          {children}
        </div>
      </div>
    </div>
  );
}