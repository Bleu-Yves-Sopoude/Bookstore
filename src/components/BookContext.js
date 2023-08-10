import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import list from './list';

const BookContext = React.createContext();

export const useBookContext = () => useContext(BookContext);

const BookProvider = ({ children }) => {
  const [bookCollection, setBookCollection] = useState(list);

  return (
    <BookContext.Provider value={{ bookCollection, setBookCollection }}>
      {children}
    </BookContext.Provider>
  );
};
BookProvider.propTypes = { children: PropTypes.node.isRequired };
export default BookProvider;
