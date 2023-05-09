import Upload from "./Upload";

function Steps() {
    return (
      <>
      <div className="bg-orange-600 w-4/6 h-auto m-auto rounded-xl mt-48 pb-8">
        <h1 className="text-white p-5 text-3xl sm:text-5xl xl:text-7xl">Step 1: Upload Picture</h1>
        <Upload></Upload>
      </div>
      </>
    );
}

export default Steps;