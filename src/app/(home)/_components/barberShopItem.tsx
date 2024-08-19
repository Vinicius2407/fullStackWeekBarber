"use client"
import { BarberShop } from "@prisma/client"

import { Card, CardContent } from "@/app/_components/ui/card"
import Image from "next/image"
import { Button } from "@/app/_components/ui/button"
import { Badge } from "@/app/_components/ui/badge"
import { StarIcon } from "lucide-react"
import { useRouter } from "next/navigation"

interface BarberShopItemProps {
    barberShopItem: BarberShop
}

export default function BarberShopItem({
    barberShopItem,
}: BarberShopItemProps) {
    const router = useRouter()

    const handleBookingClick = () => {
        router.push(`/barbershops/${barberShopItem.id}`)
    }

    return (
        <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
            <CardContent className="px-1 py-0">
                <div className="relative h-[159px] w-full">
                    <div className="absolute left-2 top-1 z-50">
                        <Badge
                            variant={"secondary"}
                            className="flex items-center gap-1 opacity-90"
                        >
                            <StarIcon
                                size={12}
                                className="fill-primary text-primary"
                            />
                            <span className="text-sm">5,0</span>
                        </Badge>
                    </div>
                    <Image
                        src={barberShopItem.imageURL}
                        alt="Imagem da barbearia"
                        width={0}
                        height={0}
                        sizes="100vw"
                        fill
                        className="rounded-2xl object-cover"
                    />
                </div>

                <div className="px-2 pb-3">
                    <h2 className="overflow-hidden text-ellipsis text-nowrap font-bold">
                        {barberShopItem.name}
                    </h2>
                    <p className="overflow-hidden text-ellipsis text-nowrap text-sm text-gray-400">
                        {barberShopItem.address}
                    </p>
                    <Button
                        className="w-full"
                        onClick={handleBookingClick}
                        variant={"secondary"}
                    >
                        Reservar
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
