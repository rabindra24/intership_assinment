import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { logo } from "@/public/images";
import { Button } from "./ui/button";
import Link from "next/link";
import { navLinks } from "@/constant";

const MobileNavbar = ({ classnames }: { classnames: string }) => {
  return (
    <div className={`${classnames} flex justify-between flex-row`}>
      <Image
        src={logo}
        width={300}
        height={120}
        className="w-[100px] "
        alt="logo"
      />
      <Sheet>
        <SheetTrigger>
          <MenuIcon className="h-7 w-7" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Image
                src={logo}
                width={300}
                height={120}
                className="w-[100px] "
                alt="logo"
              />
            </SheetTitle>
            <div className="flex pt-5 flex-col gap-5 w-full items-start justify-start">
              {navLinks.map((item, idx) => (
                <SheetTrigger key={idx} asChild className="font-bold">
                  <Link href={item.link}>{item.title}</Link>
                </SheetTrigger>
              ))}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
