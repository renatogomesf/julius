import Image from 'next/image';

export default function Login() {
  return (
    <div className="bg-[#F9F9FA] flex items-center justify-center h-screen">
      <div className="flex items-center justify-center w-[580px] h-[556px] bg-[#fff] rounded-3xl">
        <div className="flex flex-col items-center justify-center max-w-[384px]">
          <div className="text-center mb-7">
            <h1 className="text-2xl font-semibold mb-2">Sign In</h1>
            <p className="text-[0.9rem] text-black/40">Your Social Campaings</p>
          </div>

          <div className="flex gap-4">
            <button className="flex items-center justify-center gap-2 w-46 h-10 rounded-[12px] border-[1px] border-black/10 text-[0.9rem]">
              <Image src={'/apple.png'} alt="apple" width={20} height={20} />
              <p>Sign in with Apple</p>
            </button>
            <button className="flex items-center justify-center gap-2 w-46 h-10 rounded-[12px] border-[1px] border-black/10 text-[0.9rem]">
              <Image src={'/google.png'} alt="google" width={20} height={20} />
              <p>Sign in with Google</p>
            </button>
          </div>

          <div className="flex items-center justify-between w-full gap-4 mt-7 mb-7">
            <hr className="w-full border-black/10" />
            <p className="text-center text-[0.8rem] text-black/40 text-nowrap">
              Or with Email
            </p>
            <hr className="w-full border-black/10" />
          </div>

          <div className="flex flex-col text-end gap-4">
            <input
              className="w-96 h-10 rounded-[12px] border-[1px] border-black/10 pt-1 pb-1 pl-3 pr-3 outline-none text-[0.9rem] focus:border-black"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
            <input
              className="w-96 h-10 rounded-[12px] border-[1px] border-black/10 pt-1 pb-1 pl-3 pr-3 outline-none text-[0.9rem] focus:border-black"
              type="password"
              name="email"
              id="email"
              placeholder="Password"
            />
            <a href="" className="text-[0.9rem] text-[#9f9ff8]">
              Forgot Password
            </a>
          </div>

          <div className="flex flex-col items-center mt-7">
            <button className="w-96 h-10 bg-black text-white rounded-[12px] pt-2 pb-2 pl-4 pr-4">
              <p>Sign In</p>
            </button>
            <p className="text-[0.9rem] text-black/40 mt-7">
              Not a Member yet?{' '}
              <a href="" className="text-[0.9rem] text-[#9f9ff8]">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
