import css from "./SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
    return (
       <div >
       <p className={css.label}>Find contacts by name</p>
        <input 
          className={css.input}
        type="text"
        
        value={value}
        onChange={onChange}
      />
      </div>
    );
  }