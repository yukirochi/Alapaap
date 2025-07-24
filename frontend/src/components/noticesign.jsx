import { NavLink } from "react-router-dom";

function NoticeSign({closennotice, opensign}) {
    return ( 
        <div className="w-[100%] h-[100%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[rgba(0,0,0,0.1)]"
        onClick={() => closennotice()}>
        <div
  class="group select-none w-[250px] flex flex-col p-4 absolute items-center justify-center bg-gray-800 border border-gray-800 shadow-lg rounded-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
>
  <div class="">
    <div class="text-center p-3 flex-auto justify-center">
      <div
        className="material-symbols-outlined w-[100%] h-[60px] text-[#ff6583] text-5xl"
      >
        sync_saved_locally
      </div>
      <h2 class="text-xl font-bold py-4 text-gray-200">Are you sure?</h2>
      <p class="font-bold text-sm text-gray-500 px-2">
        Your progress wont be saved if you dont have an account
      </p>
    </div>
    <div class="p-2 mt-2 text-center space-x-1 md:block">
      <NavLink
        to={"/lobby"}
        className="mb-2 md:mb-0 bg-gray-700 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border-2 border-gray-600 hover:border-gray-700 text-gray-300 rounded-full hover:shadow-lg hover:bg-gray-800 transition ease-in duration-300"
      >
        Cancel
      </NavLink>
      <NavLink
        onClick={() => opensign()}
        className="bg-[#ff6583] hover:bg-transparent px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-[#ff6583] hover:border-[#ff6583] text-white hover:text-[#ff6583] rounded-full transition ease-in duration-300"
      >
        SIGNUP
      </NavLink>
    </div>
  </div>
</div>
</div>

     );
}

export default NoticeSign;