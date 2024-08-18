import Image from "next/image";

import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

export default function Header() {
    return (
        <Card>
            <CardContent className="p-5 flex flex-row items-center justify-between">
                <Image src="/logo.png" alt="Logo Barbearia" height={22} width={120} />
                <Button variant="outline" size="icon">
                    <MenuIcon size={18} />
                </Button>
            </CardContent>
        </Card>
    )
}