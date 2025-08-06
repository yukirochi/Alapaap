import { useLocation } from "react-router-dom";

function Profile() {
  const location = useLocation();
  let userinfo = location.state?.userinfo;
  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="h-[7%] w-[100%] flex justify-center items-center lg:hidden">
        <p className="text-2xl font-bold  lg:text-5xl md:text-4xl">
          <span className="text-[#6c63ff]">A</span>L
          <span className="text-[#6c63ff]">A</span>P
          <span className="text-[#ff6583]">A</span>
          <span className="text-[#6c63ff]">A</span>P
        </p>
      </div>
      <div className="w-[100%] h-[90%]  flex flex-col items-center lg:flex-row-reverse lg:justify-center lg:gap-[3%] lg:h-[100%]">
        <div className="w-[80%] h-[45%] lg:w-[25%] lg:h-[95%] border-[1px] border-black border-[solid] rounded-[5px] mb-[3%] lg:mb-0">
          <header className="w-[100%] h-[10%] lg:flex justify-center items-center hidden">
            <p className="text-2xl font-bold  lg:text-5xl md:text-4xl">
              <span className="text-[#6c63ff]">A</span>L
              <span className="text-[#6c63ff]">A</span>P
              <span className="text-[#ff6583]">A</span>
              <span className="text-[#6c63ff]">A</span>P
            </p>
          </header>
          <main className="w-[100%] h-[100%] lg:h-[90%]  ">
            <div className="w-[100%] h-[20%] lg:h-[15%]  flex flex-col justify-center items-center ">
              <p className="w-[70%] h-[50] text-center text-2xl lg:text-3xl  border-b-[1px] border-b-bluish">otter</p>
              <p className="lg:text-xl text-[15px] md:text-[20px]">username</p>
            </div>
            <div className="w-[100%] h-[20%] lg:h-[15%]  flex flex-col justify-center items-center ">
              <p className="w-[70%] h-[50] text-center text-xl lg:text-2xl  border-b-[1px] border-b-bluish">otter@gmail.com</p>
              <p className="lg:text-xl text-[15px] md:text-[20px]">email</p>
            </div>
            
          </main>
        </div>
        <div className="w-[80%] h-[55%] lg:w-[70%] lg:h-[95%] border-[1px] border-black border-[solid] rounded-[5px]">
          <header className="w-[100%] h-[10%] flex justify-center items-center">
            <p className="text-2xl font-bold  lg:text-5xl md:text-4xl">
              <span className="text-bluish">P</span>eso
              <span className="text-pinkish">n</span>al R
              <span className="text-bluish">e</span>c
              <span className="text-pinkish">o</span>rds
            </p>
          </header>
          <main className="w-[100%] h-[90%] bg-slate-600">

          </main>
        </div>
      </div>
    </div>
  );
}

export default Profile;
