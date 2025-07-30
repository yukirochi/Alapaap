function Slider({value}) {
  return (
    <div className="w-[100%] h-[5%]  flex items-center justify-center flex-col ">
      
      <div className="w-[70%] h-[30%] flex justify-between items-center mb-5 font-bold">
        <p className="text-[#6c63ff]">Lupa</p>
        <p className="text-[green]"></p>
        <p className="text-[green]"></p>
        <p className="text-[#b69230]"></p>
        <p className="text-[#b69230]"></p>
        <p className="text-[#b69230]"></p>
        <p className="text-[red]"></p>
        <p className="text-[red]"></p>
        <p className="text-[red]"></p>
        <p className="text-[#ff6583]">Alapaap</p>
      </div>
      <input
        type="range"
        className="h-[10%] w-[70%] rounded-sm cursor-pointer slider"
        min="1"
        max="10"
        step="1"
        value ={value}
        disabled
      />
      {value <= 3 && <p className="text-green-950 font-bold">EASY</p>}
      {value <= 6 && value > 3 && <p className="text-[#b69230] font-bold">MEDIUM</p>}
      {value <= 9 && value > 6 && <p className="text-[red] font-bold">HARD</p>}
      {value > 9 && <p className="text-[purple] font-bold">BOSS</p>}
    </div>
  );
}

export default Slider;
