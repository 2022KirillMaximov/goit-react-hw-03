import { MdPhoneAndroid } from 'react-icons/md';
import { RiContactsFill } from 'react-icons/ri';
 import css from './Contact.module.css'

export default function Contact({ data: { id, name, number } ,onDelete }) {
  return (
    <div className={css.contactsList}>
      <div  className={css.contactsList} >
        <p className={css.text} >
          <RiContactsFill size="24" />
          {name}
        </p>
        <p   className={css.phone}>
              <MdPhoneAndroid size="24" />
          {number}
        </p>
      </div>
            <button className={css.btn} onClick={() => onDelete(id)} >
        Delete
      </button>
        </div>
    );
}