function Userhead() {
  return (
    <div className="w-[100%] h-[40px]   border-solid border-[1px] border-black max-w-[200px] flex items-center justify-center ">
        <div className="w-[30px] h-[80%] material-symbols-outlined text-[30px]">
          account_circle
        </div>  
        <div className="w-[70%] h-[90%]">
             <div className="w-[80%] h-[70%] border-b-black border-b-[1px] text-[15px] ml-[5%] text-center">
                <p>User</p>
             </div>
             <div></div>
        </div>
    </div>
  );
}

export default Userhead;
