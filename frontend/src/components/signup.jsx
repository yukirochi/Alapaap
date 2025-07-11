function Signupuser() {
  return (
    <div className="w-[100%] h-[60%] ">
      <form className="w-[100%] h-[100%]  max-sm:relative max-sm:z-30">
        <div className="h-[75px]">
          <p className="text-[20px] mb-[5px]">
            <span className="text-[#ff6583]">U</span>sern
            <span className="text-[#6c63ff]">a</span>me
          </p>
          <input
            type="text"
            className="w-[100%] h-[30px] rounded-[6px] border-[1px] border-solid border-black md:h-[40px] outline-none text-center"
            required
          />
          <p className="w-[100%] text-center text-[13px] text-[#611717]">
            Username is already taken
          </p>
        </div>
        <div className="h-[75px]">
          <p className="text-[20px] mb-[5px]">
            E<span className="text-[#6c63ff]">m</span>ail
          </p>
          <input
            type="text"
            className="w-[100%] h-[30px] rounded-[6px] border-[1px] border-solid border-black md:h-[40px]  outline-none text-center"
            required
          />
          <p className="w-[100%] text-center text-[13px] text-[#611717]">
            Email is already taken
          </p>
        </div>
        <div className="h-[70px]">
          <p className="text-[20px] mb-[5px]">
            Pas<span className="text-[#ff6583]">s</span>wo
            <span className="text-[#6c63ff]">r</span>d
          </p>
          <input
            type="text"
            className="w-[100%] h-[30px] rounded-[6px] border-[1px] border-solid border-black md:h-[40px] outline-none text-center"
            required
          />
        </div>
        <div className="h-[90px]">
          <p className="text-[20px] mb-[5px]">
            <span className="text-[#6c63ff]">C</span>onfirm Pas
            <span className="text-[#ff6583]">s</span>wo
            <span className="text-[#6c63ff]">r</span>d
          </p>
          <input
            type="text"
            className="w-[100%] h-[30px] rounded-[6px] border-[1px] border-solid border-black bg-transparent md:h-[40px]  outline-none text-center"
            required
          />
          <p className="w-[100%] text-center text-[13px] text-[#611717]">
            Password dont match
          </p>
        </div>
        <div className="w-[100%] h-[20%] flex justify-center items-center">
            <button className="w-[40%] h-[50%] lg:text-[20px] bg-[#434343] flex justify-center items-center text-[#6c63ff] rounded-[5px]">JOIN</button>
        </div>
      </form>
    </div>
  );
}

export default Signupuser;
