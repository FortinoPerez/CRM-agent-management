import { Checkbox } from '@/components/ui/Checkbox';
import { Label } from '@/components/ui/label';

export const CheckboxCall = () => (
  <div className="flex items-center gap-2">
    <Checkbox id="r1" />
    <Label htmlFor="r1">Llamada de entrada.</Label>
  </div>
);