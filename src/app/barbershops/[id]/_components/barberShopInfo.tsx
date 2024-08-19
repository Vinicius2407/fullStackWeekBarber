"use client"

import { useRouter } from "next/navigation";
import Image from "next/image";

import { BarberShop } from "@prisma/client";

import { Button } from "@/app/_components/ui/button";
import { ChevronLeftIcon, MenuIcon, MapPinIcon, StarIcon } from "lucide-react";

interface BabershopInfoProps {
    barbershop: BarberShop;
}

export default function BarberShopInfo({ barbershop }: BabershopInfoProps) {
    const router = useRouter();

    const handleBackClick = () => {
        router.back();
    }

    return (
        <div>
            <div className="h-[250px] w-full relative">
                <Button onClick={handleBackClick} size={"icon"} variant={"outline"} className="z-50 absolute top-4 left-4">
                    <ChevronLeftIcon />
                </Button>

                <Button size={"icon"} variant={"outline"} className="z-50 absolute top-4 right-4">
                    <MenuIcon />
                </Button>
                <Image src={barbershop.imageURL} fill alt="Imagem da barbearia" className="object-cover opacity-75" />
            </div>
            <div className="pt-3 pb-6 px-5 border-b border-solid border-secondary">
                <h1 className="text-xl font-bold">{barbershop.name}</h1>
                <div className="flex items-center gap-2">
                    <MapPinIcon size={18} className="text-primary" />
                    <p className="text-sm">{barbershop.address}</p>
                </div>
                <div className="flex items-center gap-2">
                    <StarIcon size={18} className="text-primary" />
                    <p className="text-sm">5,0 (899 Avaliações)</p>
                </div>
            </div>
        </div>
    );
}