export default function NavBar() {
  return (
    <div className="flex justify-between border-b-2 border-black">
      <div className=" m-2 text-3xl font-bold text-green-600">Home</div>
      <div className=" flex justify-start gap-10">
        <div className="m-2">Projects</div>
        <div className="m-2">Skills</div>
        <div>
          <button className=" rounded-md bg-green-600 p-2 text-white hover:bg-green-400">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
}
