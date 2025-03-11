export default function Card() {
  return (
    <div className="h-80 w-1/2 mx-auto my-10  flex-col justify-items-center content-center border-4 border-gray-600 rounded-xl">
      <div className="h-1/3 w-full bg-blue-400 rounded-t-lg flex-col justify-items-center content-center">
        <h2 className="text-white font-bold text-2xl ">News you can Trust</h2>
      </div>
      <div className="h-2/3 w-full bg-gray-200 rounded-b-lg flex flex-col items-center justify-center gap-2">
        <h3 className="font-bold text-xl">Stay up to date with the latest!</h3>
        <p>
          Subscribe to our newsletter for the latest news straight into your
          inbox
        </p>
        <button className="w-1/4 h-10 rounded-lg bg-gray-300 text-gray-500">
          you@example.com
        </button>
        <button className="w-1/4 h-10 rounded-3xl bg-blue-500 text-white">
          Subscribe Now
        </button>
        <p className="">We value your privacy</p>
      </div>
    </div>
  );
}
