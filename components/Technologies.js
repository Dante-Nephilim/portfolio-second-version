import Image from 'next/image';

export default function Technologies() {
  return (
    <div>
      <h1 className="my-6 flex justify-center  border-b-2 border-black text-2xl font-semibold text-blue-600">
        Technologies
      </h1>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-7">
        <Image
          className="mx-3 my-3 h-auto w-full"
          width={100}
          height={100}
          src="/svgs/reactjs-svgrepo-com.svg"
          alt="react-js"
        />
        <Image
          className="mx-3 my-3 h-auto w-full"
          width={100}
          height={100}
          src="/svgs/nextjs-svgrepo-com.svg"
          alt="nextjs"
        />
        <Image
          className="mx-3 my-3 h-auto w-full"
          width={100}
          height={100}
          src="/svgs/nodejs-svgrepo-com.svg"
          alt="node-js"
        />
        <Image
          className="mx-3 my-3 h-auto w-full"
          width={100}
          height={100}
          src="/svgs/typescript-svgrepo-com.svg"
          alt="Ts"
        />
        <Image
          className="mx-3 my-3 h-auto w-full"
          width={100}
          height={100}
          src="/svgs/javascript-svgrepo-com.svg"
          alt="Js"
        />
        <Image
          className="mx-3 my-3 h-auto w-full"
          width={100}
          height={100}
          src="/svgs/css-3-svgrepo-com.svg"
          alt="CSS"
        />
        <Image
          className="mx-3 my-3 h-auto w-full"
          width={100}
          height={100}
          src="/svgs/html5-svgrepo-com.svg"
          alt="HTML"
        />
      </div>
    </div>
  );
}
