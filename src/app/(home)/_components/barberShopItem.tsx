import { BarberShop } from "@prisma/client";

import { Card, CardContent } from "@/app/_components/ui/card";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { Badge } from "@/app/_components/ui/badge";
import { StarIcon } from "lucide-react";

interface BarberShopItemProps {
    barberShopItem: BarberShop
}

export default function BarberShopItem({ barberShopItem }: BarberShopItemProps) {
    return (
        <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
            <CardContent className="px-1 py-0">
                <div className="w-full h-[159px] relative">
                    <div className="absolute top-1 left-2 z-50">
                        <Badge variant={"secondary"} className="opacity-90 flex items-center gap-1">
                            <StarIcon size={12} className="fill-primary text-primary" />
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
                    <h2 className="font-bold overflow-hidden text-ellipsis text-nowrap">{barberShopItem.name}</h2>
                    <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barberShopItem.address}</p>
                    <Button className="w-full" variant={"secondary"}>Reservar</Button>
                </div>
            </CardContent>
        </Card>
    )
}