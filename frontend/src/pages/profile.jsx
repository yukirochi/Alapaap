import { useLocation, NavLink, useNavigate } from "react-router-dom";

function Profile() {
  const location = useLocation();
  let navigate = useNavigate()
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
        <div className="w-[90%] md:w-[80%] h-[45%] lg:w-[25%] lg:h-[95%] border-[1px] border-black border-[solid] rounded-[5px] mb-[3%] lg:mb-0">
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
              <p className="w-[70%] h-[50] text-center text-2xl lg:text-3xl  border-b-[1px] border-b-bluish">
                {userinfo.username}
              </p>
              <p className="lg:text-xl text-[15px] md:text-[20px] text-pinkish">
                username
              </p>
            </div>
            <div className="w-[100%] h-[20%] lg:h-[15%]  flex flex-col justify-center items-center ">
              <p className="w-[70%] h-[50] text-center text-xl lg:text-2xl  border-b-[1px] border-b-bluish">
                {userinfo.email}
              </p>
              <p className="lg:text-xl text-[15px] md:text-[20px] text-pinkish">
                email
              </p>
            </div>
            <div className="w-[100%] h-[50%] flex flex-col justify-around items-center">
              <button className="w-[200px] h-[30px] border-[1px] border-black border-[solid] rounded-[5px] lg:w-[250px] lg:h-[60px] md:h-[40px] md:text-xl lg:text-xl text-bluish">
                Change Email
              </button>
              <button className="w-[200px] h-[30px] border-[1px] border-black border-[solid] rounded-[5px] lg:w-[250px] lg:h-[60px] md:h-[40px] md:text-xl lg:text-xl text-bluish">
                Change Password
              </button>
              <button className="w-[200px] h-[30px] border-[1px] border-black border-[solid] rounded-[5px] lg:w-[250px] lg:h-[60px] md:h-[40px] md:text-xl lg:text-xl text-bluish">
                Contact Support
              </button>
              <button className="w-[200px] h-[30px] border-[1px] border-black border-[solid] text-center rounded-[5px] lg:w-[250px] lg:h-[60px] md:h-[40px] md:text-xl lg:text-xl text-pinkish"
               onClick={()=>{
                navigate("/lobby",{state:{userinfo:userinfo, username: userinfo.username}})
               }}
              >
                Home
              </button>
              
            </div>
          </main>
        </div>
        <div className="w-[90%] md:w-[80%] h-[55%] lg:w-[70%] lg:h-[95%] border-[1px] border-black border-[solid] rounded-[5px]">
          <header className="w-[100%] h-[10%] flex justify-center items-center">
            <p className="text-2xl font-bold  lg:text-5xl md:text-4xl">
              <span className="text-bluish">P</span>eso
              <span className="text-pinkish">n</span>al R
              <span className="text-bluish">e</span>c
              <span className="text-pinkish">o</span>rds
            </p>
          </header>
          <main className="w-[100%] h-[90%] flex justify-center overflow-x-auto ">
            <div className="relative  md:w-[80%] h-[85%] mt-[5%] sm:w-[100%] ">
              <table className=" text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 w-[100%]">
                <thead class="text-xs text-black uppercase bg-pinkish  dark:text-gray-400">
                  <tr className="sticky">
                    <th scope="col" class="px-6 py-3">
                      No.
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Topic
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Score
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <td class="px-6 py-4">1</td>
                    <td class="px-6 py-4">Agham</td>
                    <td class="px-6 py-4">80%</td>
                    <td class="px-6 py-4">10/1/25</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <td class="px-6 py-4">2</td>
                    <td class="px-6 py-4">Agham</td>
                    <td class="px-6 py-4">80%</td>
                    <td class="px-6 py-4">10/1/25</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <td class="px-6 py-4">2</td>
                    <td class="px-6 py-4">Agham</td>
                    <td class="px-6 py-4">80%</td>
                    <td class="px-6 py-4">10/1/25</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <td class="px-6 py-4">2</td>
                    <td class="px-6 py-4">Agham</td>
                    <td class="px-6 py-4">80%</td>
                    <td class="px-6 py-4">10/1/25</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <td class="px-6 py-4">2</td>
                    <td class="px-6 py-4">Agham</td>
                    <td class="px-6 py-4">80%</td>
                    <td class="px-6 py-4">10/1/25</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <td class="px-6 py-4">2</td>
                    <td class="px-6 py-4">Agham</td>
                    <td class="px-6 py-4">80%</td>
                    <td class="px-6 py-4">10/1/25</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <td class="px-6 py-4">2</td>
                    <td class="px-6 py-4">Agham</td>
                    <td class="px-6 py-4">80%</td>
                    <td class="px-6 py-4">10/1/25</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <td class="px-6 py-4">2</td>
                    <td class="px-6 py-4">Agham</td>
                    <td class="px-6 py-4">80%</td>
                    <td class="px-6 py-4">10/1/25</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <td class="px-6 py-4">2</td>
                    <td class="px-6 py-4">Agham</td>
                    <td class="px-6 py-4">80%</td>
                    <td class="px-6 py-4">10/1/25</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <td class="px-6 py-4">2</td>
                    <td class="px-6 py-4">Agham</td>
                    <td class="px-6 py-4">80%</td>
                    <td class="px-6 py-4">10/1/25</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <td class="px-6 py-4">2</td>
                    <td class="px-6 py-4">Agham</td>
                    <td class="px-6 py-4">80%</td>
                    <td class="px-6 py-4">10/1/25</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Profile;
