import { db } from "@/app/_lib/prisma"

import BarberShopInfo from "./_components/barberShopInfo"
import ServiceItem from "./_components/serviceItem"

interface BabershopDetailsPageProps {
    params: {
        id?: string
    }
}

export default async function BabershopDetailsPage({
    params,
}: BabershopDetailsPageProps) {
    if (!params.id) {
        // TODO: Redirect to home page
        return null
    }

    const barbershop = await db.barberShop.findUnique({
        where: {
            id: params.id,
        },
        include: {
            services: true,
        },
    })

    if (!barbershop) {
        return null
    }

    return (
        <div>
            <BarberShopInfo barbershop={barbershop} />

            <div className="flex flex-col gap-3 px-5 py-6">
                {barbershop.services.map((service) => (
                    <ServiceItem key={service.id} service={service} />
                ))}
            </div>
        </div>
    )
}
