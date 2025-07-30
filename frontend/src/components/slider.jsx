function Slider() {
  return (
    <div className="w-[100%] h-[5%]  flex items-center justify-center flex-col ">
        <div className="w-[70%] h-[30%] flex justify-between items-center mb-5 font-bold ">
        <p className="text-[green]">.</p>
        <p className="text-[green]">.</p>
        <p className="text-[green]">.</p>
        <p className="text-[yellow]">.</p>
        <p className="text-[yellow]">.</p>
        <p className="text-[yellow]">.</p>
        <p className="text-[red]">.</p>
        <p className="text-[red]">.</p>
        <p className="text-[red]">.</p>
        <p className="text-[purple]">.</p>
      </div>
      <div className="w-[70%] h-[30%] flex justify-between items-center mb-5 font-bold">
        <p >1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
      </div>
      <input
        type="range"
        className="h-[10%] w-[70%] rounded-sm cursor-pointer slider"
        min="1"
        max="10"
        step="1"
        value="3"
        disabled
      />
    </div>
  );
}

export default Slider;
