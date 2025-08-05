import type { FunctionComponent, JSX } from "react";

const Home: FunctionComponent = (): JSX.Element => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <p className="text-6xl font-bold text-black">Hello, world!</p>
    </div>
  );
};

export default Home;
