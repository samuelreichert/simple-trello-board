import './Dropdown.css';

const Dropdown = ({ isOpen, onSelectOption, options }) => (
  <div className={`dropdown ${isOpen ? 'dropdown--open' : ''}`}>
    {options.map((option, i) => (
      <div className='dropdown__item' key={i} onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onSelectOption(option);
      }}>
        {option}
      </div>
    ))}
  </div>
);

export default Dropdown;
