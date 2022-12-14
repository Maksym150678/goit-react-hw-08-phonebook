import styles from './TextField.module.css';
import { nanoid } from 'nanoid';
import { useMemo } from 'react';

const TextField = ({
  label,
  name,
  value,
  placeholder,
  required,
  type,
  pattern,
  title,
  onChange,
}) => {
  const id = useMemo(() => nanoid(), []);
  return (
    <div className={styles.block}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}:
          <input
            className={styles.input}
            type={type}
            name={name}
            pattern={pattern}
            title={title}
            required={required}
            value={value}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
          />
        </label>
      )}
    </div>
  );
};

export default TextField;

TextField.defaultProps = {
  type: 'text',
  required: false,
};