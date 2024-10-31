import React, { useState } from 'react'

function DropdownMenu({buttonClassName, trigger, openClasses, closedClasses, id, options, onSelect}) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    } 

    const handleOptionClick = (option) => {
        if (typeof option === 'string') {
            onSelect(option);  // Set formData only if option is a string
        } else if (React.isValidElement(option)) {
            onSelect(option.props.children);  // Set formData based on JSX text
        }
        setOpen(false);  // Close the dropdown
    };

    

    //TEMPLATE FOR USING 
    {/* <DropdownMenu 
          buttonClassName=''
          trigger={}
          openClasses=''
          closedClasses=''
          id=''
          options={['', '', '', '']}
          onSelect={}
        /> */}

  return (
    <div className='dropdown-wrapper'>
        <button onClick={ handleClick } className={`${buttonClassName} ${open ? 'open' : ''}`} aria-label="Click to expand">{trigger}</button>
        <div className={open ? openClasses : closedClasses} id={id}>
            <ul className="dropdown-list">
                {options.map((option, index) => (
                    <li
                        key={index}
                        className="dropdown-item"
                        onClick={() => handleOptionClick(option)}  // Handle option selection
                    >
                        {typeof option === 'string' ? option : option}
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default DropdownMenu

