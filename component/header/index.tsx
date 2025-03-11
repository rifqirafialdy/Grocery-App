import Image from "next/image";
import { FC } from "react";

const Header: FC = () => {
    return (
        <div className="relative pt-14 w-full flex items-start  justify-between">
            <h1 className="text-xl font-semibold">Vegetable</h1>
            <div className="flex  gap-2">
            <Image src="/filter.svg" alt="Filter Icon" width={24} height={24} />
            <Image src="/Icon R.png" alt="Filter Icon" width={52} height={42} />
            </div>
        </div>
    );
};

export default Header;
