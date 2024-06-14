

function Inicio() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 py-10 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/33 max-w-4xl ">
            <div className="w-3/5 p-5">
                <div className="text-left font-bold">
                    <span className="text-green-500">WeFund</span>
                </div>
            </div>{/* Sign in*/}
            <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                <h2 className="text-3xl font-bold mb-2">Hello, Friend</h2>
                <div className="border-2 w-10 border-white inline-block mb-2"></div>
                <p className="mb-2">Fill up personal information and start journey with us.</p>
                <a href="#" className="border-2 border-white rounded-full px-6 py-2 inline-block font-senibold hover:bg-white hover:text-green-500">Sign Up</a>
            </div>{/* Sign up */}
        </div>
    
      </div>


      
    </>
  );
}

export default Inicio