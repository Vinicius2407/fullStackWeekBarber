import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

import { db } from "../_lib/prisma"

import BookingItem from "../_components/bookingItem"
import Header from "../_components/header"
import Search from "./_components/search"
import BarberShopItem from "./_components/barberShopItem"

export default async function Home() {
    const barberShopItems = await db.barberShop.findMany({})
    return (
        <div>
            <Header />

            <div className="px-5 pt-5">
                <h2 className="text-xl font-bold">Olá Miguel</h2>
                <p className="text-sm capitalize">
                    {format(new Date(), "EEEE',' dd 'de' MMMM", {
                        locale: ptBR,
                    })}
                </p>
            </div>
            <div className="mt-6 px-5">
                <Search />
            </div>
            <div className="mt-6 px-5">
                <h2 className="mb-3 text-xs font-bold uppercase text-gray-400">
                    Agendamentos
                </h2>
                <BookingItem />
            </div>
            <div className="mt-6">
                <h2 className="mb-3 px-5 text-xs font-bold uppercase text-gray-400">
                    Recomendados
                </h2>
                <div className="flex gap-4 overflow-x-auto px-2 [&::-webkit-scrollbar]:hidden">
                    {barberShopItems.map((barberShop) => (
                        <BarberShopItem
                            key={barberShop.id}
                            barberShopItem={barberShop}
                        />
                    ))}
                </div>
            </div>

            <div className="mb-[4.5rem] mt-6">
                <h2 className="mb-3 px-5 text-xs font-bold uppercase text-gray-400">
                    Populares
                </h2>
                <div className="flex gap-4 overflow-x-auto px-2 [&::-webkit-scrollbar]:hidden">
                    {barberShopItems.map((barberShop) => (
                        <BarberShopItem
                            key={barberShop.id}
                            barberShopItem={barberShop}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
