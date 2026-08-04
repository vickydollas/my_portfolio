import { Link } from "react-router-dom";

function Logo() {
  const name = "VICTOR"
  const displayName = name[0].charAt(0)
  // console.log(displayName)
  return (
    <div>
      <Link to='/' className='flex gap-3 items-center'>
        <span className="bg-white text-black text-2xl rounded-full py-2 px-4">{displayName}</span>
        <span className='text-xl font-bold text-textColor'>VICKY</span>
      </Link>
    </div>
  );
}

export default Logo;
