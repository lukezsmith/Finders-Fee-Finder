import FieldSort from './fieldSort';
import FieldSortDirection from './fieldSortDirection';

const DisplayDataHeader = ({ count }) => {
  
  return (
    <>
      <div className="mt-10 mb-5 border-black border-2 border-solid flex flex-row flex-wrap w-fit">
        <h3 className="ml-5 mr-5 self-center">   
          {`${count}` + " ACTIVE LISTINGS SORTED BY"} 
        </h3>
        <FieldSort />
        <FieldSortDirection />
      </div>
    </>
  ) 
}

export default DisplayDataHeader