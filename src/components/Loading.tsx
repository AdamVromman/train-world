import { Player } from "@lottiefiles/react-lottie-player";

const Loading = () => {
  return (
    <div className="loading-screen">
      <Player
        className="w-1/2 max-w-[600px]"
        autoplay
        src="./Lottie/loading.json"
      ></Player>
    </div>
  );
};

export default Loading;
