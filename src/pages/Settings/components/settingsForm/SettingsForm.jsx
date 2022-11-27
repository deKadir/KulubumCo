import styles from './form.module.scss';

const SettingsTitle = ({ text }) => {
  return <h1 className={styles.settingsTitle}>{text}</h1>;
};

const SettingsInput = ({ label, type = 'text', placeholder, value, onChange }) => {
  return (
    <div className={styles.formInput}>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

const SettingsSelect = ({ label, options = [] }) => {
  return (
    <div className={styles.formSelect}>
      <label>{label}</label>
      <select>
        {options.map((option, key) => (
          <option key={key} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

const SettingsPhoneSelect = ({ label, placeholder, options = [] }) => {
  return (
    <div className={styles.formNumber}>
      <label>{label}</label>
      <div className={styles.formNumberContainer}>
        <select>
          {options.map((option, key) => (
            <option key={key} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        <input type="text" placeholder={placeholder} />
      </div>
    </div>
  );
};

const SettingsSubmitButton = ({ children, disabled, style }) => {
  return (
    <button className={styles.formSubmit} disabled={disabled} style={style}>
      {children}
    </button>
  );
};

export { SettingsInput, SettingsSelect, SettingsSubmitButton, SettingsPhoneSelect, SettingsTitle };
