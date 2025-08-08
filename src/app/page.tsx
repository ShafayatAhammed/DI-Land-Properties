import type { FunctionComponent, JSX } from "react";

const Home: FunctionComponent = (): JSX.Element => {
  return (
    <p className="text-6xl font-bold text-black absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
      Hello, world!
    </p>
  );
};

export default Home;
