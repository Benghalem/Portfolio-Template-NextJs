import Image from "next/image";

const Avatar = () => {
  return (
    <div className="w-[1200px] h-full absolute right-0 bottom-0">
      <Image src="/avatar.png" alt="" />
    </div>
  );
};

export default Avatar;
