
import { format } from 'date-fns';
import React from 'react'
import Header from '../components./header/Header'
import Footer from '../components./Footer';





type SearchParams = {
    location: string;
    startDate: string;
    endDate: string;
    numOfGuests: string;
  };
const SearchResult = ({

    searchParams: { location, startDate, endDate, numOfGuests },
}: {
  searchParams: SearchParams;
}) => {
  let formatedStartDate;
  let formatedEndDate;
  if (startDate && endDate) {
    formatedStartDate = format(new Date(startDate), 'dd MMMM yy');
    formatedEndDate = format(new Date(endDate), 'dd MMMM yy');
  }
  const range = `${formatedStartDate} - ${formatedEndDate}`;
  return (

    <>
<Header  placeholder={`${location} | ${range} | ${numOfGuests} guests`}/>
    <main>SearchResult</main>
    <Footer />
    </>
    
  )
}

export default SearchResult;