function Gameheader({life}) {

    return ( 
        <header className="w-[100%] h-[15%] flex justify-center items-center flex-col relative">
        <p className="text-[25px] font-bold font-sans">SUBJECT</p>
        <div className="w-[100%] h-[20%] flex justify-center items-center">
          <div className="material-symbols-outlined  text-red-600">
            {life !== 0 ? "favorite" : "heart_broken"}
          </div>
          <div className="material-symbols-outlined  text-red-600">
            {life > 1 ? "favorite" : "heart_broken"}
          </div>
          <div className="material-symbols-outlined   text-red-600">
            {life > 2? "favorite" : "heart_broken"}
          </div>
        </div>
         
      </header>
     );
}

export default Gameheader;