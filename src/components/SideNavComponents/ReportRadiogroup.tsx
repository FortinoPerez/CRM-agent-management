import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/Radiogroup"

export const RadioGroupReport = () => (
    <form className="flex justify-center">
        <fieldset className="space-y-2">
            <legend className="text-sm font-medium text-gray-900 dark:text-gray-50">
                Dictamen
            </legend>
            <RadioGroup className="flex gap-x-6">
                <div className="flex items-center gap-x-3">
                    <RadioGroupItem value="1" id="radio_21" />
                    <Label htmlFor="radio_21">Contacto</Label>
                </div>
                <div className="flex items-center gap-x-3">
                    <RadioGroupItem value="2" id="radio_22" />
                    <Label htmlFor="radio_22">No contacto</Label>
                </div>
            </RadioGroup>
        </fieldset>
    </form>
)