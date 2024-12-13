import { Button } from '@/components/ui/button';
import { RiArrowRightCircleLine} from "@remixicon/react";

export const ButtonHero = () => (
    <div className="flex justify-center">
        <Button asChild>
            <a href="/main-information">
            Buscar
            <RiArrowRightCircleLine className="ml-2" />
            </a>
        </Button>
    </div>
);