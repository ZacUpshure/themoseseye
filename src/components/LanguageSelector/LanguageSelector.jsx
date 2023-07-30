import React from 'react';
import i18n from 'i18next';

function LanguageSelector() {
  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      {/* <label htmlFor="language">Select Language:</label> */}
      <select id="language" onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="de">German</option>
        {/* Add more language options as needed */}
      </select>
    </div>
  );
}

export default LanguageSelector;
