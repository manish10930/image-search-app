import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserInput } from '../utils/appSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [dummySuggestions, setDummySuggestions] = useState([]);

  useEffect(() => {
    const storedDummySuggestions = localStorage.getItem('dummySuggestions');
    if (storedDummySuggestions) {
      setDummySuggestions(JSON.parse(storedDummySuggestions));
    }
  }, []);

  const handleInputChange = (event) => {
    const userInput = event.target.value;
    console.log("manishkummar",userInput)
    setQuery(userInput);
    dispatch(setUserInput(userInput));

   

    if (userInput.trim() === '') {
      setSuggestions([]);
    } else {
      const filteredSuggestions = dummySuggestions.filter(
        suggestion => suggestion.toLowerCase().includes(userInput.toLowerCase())
      );
      setSuggestions(filteredSuggestions);

      const newUserInput = userInput;
      
if (!dummySuggestions.includes(newUserInput)) {
  const newData=dummySuggestions;
  newData.push(newUserInput);
  localStorage.setItem('dummySuggestions', JSON.stringify(newData));
}
   
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
  };

  const handleClearLocalStorage = () => {
    setSuggestions([]);
    localStorage.removeItem('dummySuggestions');
    setDummySuggestions([]);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="border border-gray-300 p-2 rounded-md w-64 focus:outline-none focus:border-blue-500"
        placeholder="Search..."
      />
      {suggestions.length > 0 && (
        <div className="absolute z-10 left-0 mt-2 w-64 bg-white border border-gray-300 rounded-md shadow-lg">
          <ul>
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="p-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
          <div className='flex justify-end p-1'>
            <button
              onClick={handleClearLocalStorage}
              className="p-2 bg-red-500 text-white cursor-pointer right-0 rounded-md "
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
