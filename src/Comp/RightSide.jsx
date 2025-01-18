import { CiFacebook } from "react-icons/ci";
import { FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const RightSide = () => {
  return (
    <div>
      <div className="space-y-5">
        <div>
          <p>Login With</p>
          <div className="space-y-2 p-2">
            <button className="btn w-full bg-transparent border-2 border-stone-400">
              <FaGoogle />
              Login With Google
            </button>
            <button className="btn w-full bg-transparent border-2 border-stone-400">
              <FaGithub />
              Login With Github
            </button>
          </div>
        </div>
        <div>
          <p>Find us on</p>
          <div className="flex flex-col my-2 p-2">
            <button className="btn justify-start rounded-none border bg-transparent"><CiFacebook />Facebook</button>
            <button className="btn justify-start rounded-none border bg-transparent"><FaInstagram />Instagram</button>
            <button className="btn justify-start rounded-none border bg-transparent"><FaTwitter />Twitter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
