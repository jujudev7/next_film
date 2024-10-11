import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <h1 className="text-3xl text-center font-bold mb-3">
          <Image
            src={"/nextfilm_logo.svg"}
            alt={"Nextfilm"}
            width={220}
            height={69}
            className="sm:ml-0 hover:scale-105"
            priority={true}
          />
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
