import { db } from "@/app/_lib/prisma";
import BarberShopInfo from "./_components/barberShopInfo";

interface BabershopDetailsPageProps {
    params: {
        id?: string;
    };
}

export default async function BabershopDetailsPage({ params }: BabershopDetailsPageProps) {
    if (!params.id) {
        // TODO: Redirect to home page
        return null;
    }

    const barbershop = await db.barberShop.findUnique({
        where: {
            id: params.id
        }
    });

    if (!barbershop) {
        return null;
    }

    return (
        <BarberShopInfo barbershop={barbershop} />
    )
}