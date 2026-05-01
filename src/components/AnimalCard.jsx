import Link from 'next/link';
import { FaWeightHanging, FaMapMarkerAlt } from 'react-icons/fa';

const AnimalCard = ({ animal }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col items-center text-center p-4">
      {/* ইমেজ সেকশন */}
      <figure className="w-full h-48 overflow-hidden rounded-xl mb-4">
        <img 
          src={animal.image} 
          alt={animal.name} 
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
        />
      </figure>

      {/* টেক্সট কন্টেন্ট */}
      <div className="flex flex-col items-center w-full">
        <h2 className="text-xl font-bold text-gray-800 mb-1">{animal.name}</h2>
        <p className="text-sm text-green-600 font-semibold mb-3">{animal.breed}</p>
        
        <div className="flex justify-center gap-4 text-gray-500 text-sm mb-4">
          <span className="flex items-center gap-1"><FaWeightHanging /> {animal.weight}</span>
          <span className="flex items-center gap-1"><FaMapMarkerAlt /> {animal.location}</span>
        </div>

        <p className="text-2xl font-black text-primary mb-5">৳ {animal.price.toLocaleString()}</p>

        <Link 
          href={`/animals/${animal.id}`} 
          className="btn btn-primary btn-sm w-full rounded-lg"
        >
          বিস্তারিত দেখুন
        </Link>
      </div>
    </div>
  );
};

export default AnimalCard;