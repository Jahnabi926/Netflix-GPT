const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute bg-linear-to-r from-black text-white">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white p-4 px-12 text-xl text-black rounded-lg hover:opacity-80">
          ⏯️ Play
        </button>
        <button className="m-2 bg-gray-500 opacity-70 p-4 px-12 text-xl text-white rounded-lg hover:opacity-90">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
