import "../../index.css";

function PorjectCard({
  ProjImg: projImg,
  ProjName: projName,
  ProjDesc: projDesc,
  LiveDemo: liverDemo,
  GitHub: gitHub,
}) {
  return (
    <div className="card lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12 overflow-hidden flex flex-col justify-center items-center rounded-md drop-shadow-xl h-[560px] -mt-1">
      <div className="proj-img overflow-hidden w-[100%] border-b border-black">
        <img
          src={projImg}
          alt=""
          className="w-[100%] rounded-t-lg hover:scale-110 transition-all ease-linear"
        />
      </div>
      <div className="proj-det bg-white border text-start mt-0 pt-0 rounded-b-lg h-[40%]">
        <h2 className="text-black font-bold ms-3 mt-4">{projName}</h2>
        <p className="text-black font-medium text ms-3 mt-2">{projDesc}</p>
        <div className="icons mt-3 flex justify-center items-center gap-2 my-5">
          <h3 className="icon bg-blue-600 rounded-lg p-1 text-[10px] font-bold text-white">HTML</h3>
          <h3 className="icon bg-yellow-400 rounded-lg p-1 text-[10px] font-bold text-white">
            CSS
          </h3>
          <h3 className="icon bg-green-600 rounded-lg p-1 text-[10px] font-bold text-white">JS</h3>
          <h3 className="icon bg-gray-600 rounded-lg p-1 text-[10px] font-bold text-white">
            BootStrap
          </h3>
        </div>
        <div className="btns flex justify-evenly mb-5">
          <a
            href={liverDemo}
            target="_blank"
            className="block m-2 border-b border-b-black w-[110px] font-semibold cursor-pointer hover:translate-x-1 hover:-translate-y-1 transition-all ease-linear"
          >
            Live demo🔗
          </a>
          <a
            href={gitHub}
            target="_blank"
            className="block m-2 border-b border-b-black w-[110px] font-semibold cursor-pointer hover:translate-x-1 hover:-translate-y-1 transition-all ease-linear"
          >
            GitHub{" </>"}
          </a>
        </div>
      </div>
    </div>
  );
}
export default PorjectCard;
