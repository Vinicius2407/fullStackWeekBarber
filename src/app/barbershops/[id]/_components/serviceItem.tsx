import Image from "next/image"

import { Service } from "@prisma/client"
import { Card, CardContent } from "@/app/_components/ui/card"
import { Button } from "@/app/_components/ui/button"

interface ServiceItemProps {
    service: Service
}

export default function ServiceItem({ service }: ServiceItemProps) {
    return (
        <Card>
            <CardContent className="p-3">
                <div className="flex items-center gap-4">
                    <div className="relative max-h-[110px] min-h-[110px] min-w-[110px] max-w-[110px]">
                        <Image
                            src={service.imageURL}
                            alt="Imagem do serviço"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex w-full flex-col">
                        <h2 className="font-bold">{service.name}</h2>
                        <p className="text-sm text-gray-400">
                            {service.description}
                        </p>

                        <div className="mt-3 flex items-center justify-between">
                            <p className="text-sm font-bold text-primary">
                                {Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                }).format(Number(service.price))}
                            </p>
                            <Button variant={"secondary"}>Reservar</Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
