import { MinusIcon, PlusIcon } from './icons';

interface Props {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  /** Nombre del producto, para los aria-label */
  label: string;
}

export function QuantityStepper({ value, onChange, min = 1, max = 99, label }: Props) {
  return (
    <div
      role="group"
      aria-label={`Cantidad de ${label}`}
      className="inline-flex items-center rounded-full border border-crust/40 bg-white"
    >
      <button
        type="button"
        className="grid h-11 w-11 place-items-center rounded-full text-ink transition-colors hover:bg-flour-deep disabled:cursor-not-allowed disabled:opacity-40"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        aria-label={`Restar una unidad de ${label}`}
      >
        <MinusIcon width={18} height={18} />
      </button>
      <output aria-live="polite" className="w-8 text-center font-semibold tabular-nums">
        {value}
      </output>
      <button
        type="button"
        className="grid h-11 w-11 place-items-center rounded-full text-ink transition-colors hover:bg-flour-deep disabled:cursor-not-allowed disabled:opacity-40"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        aria-label={`Sumar una unidad de ${label}`}
      >
        <PlusIcon width={18} height={18} />
      </button>
    </div>
  );
}
