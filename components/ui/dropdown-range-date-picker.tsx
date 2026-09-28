"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar as CalendarIcon } from "lucide-react";

interface DropdownRangeDatePickerProps {
  onRangeSelect?: (range: { from?: Date; to?: Date } | undefined) => void;
  className?: string;
  placeholder?: string;
}

function DropdownRangeDatePicker({
  onRangeSelect,
  className = "",
  placeholder = "Choisir une période souhaitée"
}: DropdownRangeDatePickerProps) {
  const today = new Date();
  const [selected, setSelected] = React.useState<
    { from?: Date; to?: Date } | undefined
  >(undefined);

  const [month, setMonth] = React.useState(today.getMonth());
  const [year, setYear] = React.useState(today.getFullYear());

  // Display month for calendar
  const displayMonth = new Date(year, month, 1);

  const formattedValue = selected?.from
    ? selected.to
      ? `${format(selected.from, "dd/MM/yyyy")} – ${format(selected.to, "dd/MM/yyyy")}`
      : format(selected.from, "dd/MM/yyyy")
    : placeholder;

  const handleApply = () => {
    if (onRangeSelect) {
      onRangeSelect(selected);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={`justify-start text-left font-normal border-stone-200 bg-white/90 text-stone-700 hover:text-stone-900 rounded-full h-10 px-4 text-xs ${className}`}
        >
          <CalendarIcon className="mr-2 h-3.5 w-3.5 text-stone-500 shrink-0" />
          <span className="truncate overflow-hidden">{formattedValue}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4 bg-white border border-stone-200 rounded-2xl shadow-xl" align="start">
        <div className="space-y-4">
          {/* Dropdowns */}
          <div className="flex gap-2">
            <Select
              value={year.toString()}
              onValueChange={(val) => setYear(Number(val))}
            >
              <SelectTrigger className="w-[110px] rounded-lg text-xs">
                <SelectValue placeholder="Année" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 10 }, (_, i) => year + i).map(
                  (y) => (
                    <SelectItem key={y} value={y.toString()} className="text-xs">
                      {y}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>

            <Select
              value={month.toString()}
              onValueChange={(val) => setMonth(Number(val))}
            >
              <SelectTrigger className="w-[130px] rounded-lg text-xs">
                <SelectValue placeholder="Mois" />
              </SelectTrigger>
              <SelectContent>
                {[
                  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
                  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
                ].map((monthName, i) => (
                  <SelectItem key={i} value={i.toString()} className="text-xs">
                    {monthName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Calendar */}
          <Calendar
            mode="range"
            selected={selected as any}
            onSelect={(range: any) => {
              setSelected(range);
              if (onRangeSelect) onRangeSelect(range);
            }}
            month={displayMonth}
            onMonthChange={(date) => {
              setMonth(date.getMonth());
              setYear(date.getFullYear());
            }}
            className="rounded-lg border border-stone-100"
          />

          {/* Footer */}
          <div className="flex justify-between pt-2 border-t border-stone-100 text-xs">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => {
                setSelected(undefined);
                if (onRangeSelect) onRangeSelect(undefined);
              }}
              disabled={!selected}
              className="text-stone-500 hover:text-stone-800"
            >
              Effacer
            </Button>
            <Button
              size="sm"
              onClick={handleApply}
              disabled={!selected}
              className="bg-[#2A2523] text-white hover:bg-stone-800 rounded-lg text-xs"
            >
              Confirmer la période
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export { DropdownRangeDatePicker };
