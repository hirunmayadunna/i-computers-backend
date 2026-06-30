export default function ProductCard(props) {
    return (
        <div className="w-64 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200">

            {/* Product Image */}
            <div className="h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                    src={props.image}
                    alt={`Picture of ${props.name}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Product Details */}
            <div className="p-5">

                <h2 className="text-xl font-bold text-gray-800 truncate">
                    {props.name}
                </h2>

                <p className="text-2xl font-extrabold text-blue-600 mt-3">
                    LKR {props.price}
                    <span className="text-sm font-normal text-gray-500"> /-</span>
                </p>

                <button className="w-full mt-5 bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all duration-200 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg">
                    🛒 Buy Now
                </button>

            </div>
        </div>
    );
}