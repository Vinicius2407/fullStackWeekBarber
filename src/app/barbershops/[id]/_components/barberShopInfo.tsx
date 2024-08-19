"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"

import { BarberShop } from "@prisma/client"

import { Button } from "@/app/_components/ui/button"
import { ChevronLeftIcon, MenuIcon, MapPinIcon, StarIcon } from "lucide-react"

interface BabershopInfoProps {
    barbershop: BarberShop
}

export default function BarberShopInfo({ barbershop }: BabershopInfoProps) {
    const router = useRouter()

    const handleBackClick = () => {
        router.back()
    }

    return (
        <div>
            <div className="relative h-[250px] w-full">
                <Button
                    onClick={handleBackClick}
                    size={"icon"}
                    variant={"outline"}
                    className="absolute left-4 top-4 z-50"
                >
                    <ChevronLeftIcon />
                </Button>

                <Button
                    size={"icon"}
                    variant={"outline"}
                    className="absolute right-4 top-4 z-50"
                >
                    <MenuIcon />
                </Button>
                <Image
                    src={barbershop.imageURL}
                    fill
                    alt="Imagem da barbearia"
                    className="object-cover opacity-75"
                />
            </div>
            <div className="border-b border-solid border-secondary px-5 pb-6 pt-3">
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
    )
}
