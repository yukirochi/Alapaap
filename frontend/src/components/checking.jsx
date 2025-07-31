function Checking({answerstats, points, closethecheck}) {
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1000 bg-[rgba(67,67,67,0.4)] flex items-center justify-center">
      <div
        role="alert"
        class="rounded-md border border-gray-300 bg-white p-4 shadow-sm"
      >
        <div class="flex items-start gap-4  w-[100%]">
        

          <div class="flex-1 w-[100%] text-center">
            <strong class="font-medium text-gray-900 w-[100%] text-center"> {answerstats ? <p className="text-green-600">Correct</p> : <p className="text-red-600">Wrong</p>}</strong>

            <p class="mt-0.5 text-sm text-gray-700">
              Your Current points is : {points}
            </p>

            <div class="mt-3 flex items-center justify-center gap-2 w-[100%]">
              <button
                type="button"
                class="rounded border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100"
                onClick={()=> closethecheck()}
              >
                Continue
              </button>

              
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Checking;
