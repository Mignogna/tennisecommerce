import React from "react";

const Category = ({ filterCategory, setFilterCategory }) => {
  return (
    <>
      <div className="cat-title">Categoria</div>
      <div>
        <div>
          <label htmlFor="todos" className="sidebar-label-container">
            <input
              type="radio"
              id="todos"
              name="category"
              value="todos"
              checked={filterCategory === "todos"}
              onChange={() => setFilterCategory("todos")}
            />
            <span className="checkmark"></span>Todos
          </label>
        </div>
        <div>
          <label className="sidebar-label-container" htmlFor="Male">
            <input
              type="radio"
              id="Male"
              name="category"
              value="Male"
              checked={filterCategory === "Male"}
              onChange={() => setFilterCategory("Male")}
            />
            <span className="checkmark"></span>Masculinos
          </label>
        </div>
        <div>
          <label htmlFor="Female" className="sidebar-label-container">
            <input
              type="radio"
              id="Female"
              name="category"
              value="Female"
              checked={filterCategory === "Female"}
              onChange={() => setFilterCategory("Female")}
            />
            <span className="checkmark"></span>Feminino
          </label>
        </div>
        <div>
          <label htmlFor="Children's" className="sidebar-label-container">
            <input
              type="radio"
              id="Children's"
              name="category"
              value="Children's"
              checked={filterCategory === "Children's"}
              onChange={() => setFilterCategory("Children's")}
            />
            <span className="checkmark"></span>Infantil
          </label>
        </div>
      </div>
    </>
  );
};

export default Category;
