
function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
        <div>
        <h1 className="text-7xl text-[#fff]">LetzRead Daily Blog</h1>
        <h2 className="mt-5 md:mt-0 text-[#fff]">
            Welcome to {""} 
            <span className="underline decoration-4 decoration-[#F7AB0A]">
                 Every Human's
            </span> {""}
            favourite blog in the <span className="text-[#3288ff]">Blue Planet</span>
        </h2>
        </div>
        <p className="mt-5m md:mt-2 text-gray-400 max-w-sm">
            New product launches | The latest in technology | The Perfect How to? guide & Much More !
        </p>
    </div>
  )
}

export default Banner