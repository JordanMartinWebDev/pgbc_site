import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src={"/images/Second Edit.jpg"}
        alt={"Pine Grove Photo of Front"}
        width={3840}
        height={2160}
        className="absolute top-24 right-8 w-7/12 rounded opacity-30"
        style={{ zIndex: -1 }}
      />
      <div className="z-10 container mx-auto">
        <div className="grid grid-cols-2">
          <div className="bg-offwhiteBackground mt-32 p-8 rounded-2xl bg-opacity-10">
            <h2 className="text-5xl text-foreground">Welcome to</h2>
            <Image
              src={"/images/Light PGBCLA Logo.png"}
              alt={"Pine Grove Logo"}
              width={741}
              height={224}
              className="-mt-12"
            />
            <h3 className="text-3xl font-bold pt-12 w-5/6">
              <strong>Life is better together.</strong> We are a community of
              believers who are passionate about the gospel of Jesus Christ. We
              are committed to loving God, loving others, and making disciples.
              We would love for you to join us on this journey.
            </h3>
          </div>
          <div className="flex justify-end"></div>
        </div>
      </div>
    </div>
  );
}
