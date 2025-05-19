
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router'

const CoffeDetails = () => {
  const initCoffeData = useLoaderData()
  console.log(initCoffeData);
  return (
    <div className='min-h-screen'>
      <div className="w-10/12 mx-auto">
      <div className="my-4">
          <Link
            to={"/"}
            className="text-xl text-shadow-neutral-900 font-bold font-ran flex items-center gap-4 cursor-pointer"
          >
            {" "}
            <FaArrowLeft /> Back To Home
          </Link>
        </div>

        <div className="bg-secondaryy p-6 rounded-lg shadow-lg max-w-4xl mx-auto my-10">
  <div className="flex flex-col md:flex-row gap-8">
    {/* Coffee Image */}
    <div className="md:w-1/3">
      <img 
        src={initCoffeData.photo} 
        alt={initCoffeData.name} 
        className="w-full h-64 object-cover rounded-lg "
      />
    </div>
    
    {/* Coffee Details */}
    <div className="md:w-2/3 space-y-4">
      <h2 className="text-2xl font-bold text-coffee-800">{initCoffeData.name}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <p className="text-sm">
            <span className="font-semibold">Chef:</span> {initCoffeData.chef}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Supplier:</span> {initCoffeData.suplier}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Taste:</span> {initCoffeData.taste}
          </p>
        </div>
        
        <div>
          <p className="text-xl font-bold text-amber-800">
            {initCoffeData.price} Taka
          </p>
        </div>
      </div>
      
      <div className="pt-4 border-t border-amber-200">
        <h3 className="font-semibold text-lg mb-2">Details:</h3>
        <p className="text-gray-700">{initCoffeData.details}</p>
      </div>
      
      {/* Add to Cart Button */}
      <button className="mt-6 bg-amber-700 hover:bg-amber-800 text-white py-2 px-6 rounded-full transition duration-300">
        Add to Cart
      </button>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default CoffeDetails