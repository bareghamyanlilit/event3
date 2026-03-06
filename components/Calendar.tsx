"use client";

import Image from "next/image";

export function Calendar({ year = 2025, month = 9, highlightDay = 8 }) {

  const firstDay = new Date(year, month - 1, 1).getDay(); // 0=Կիրակի, 1=Երկ
  const daysInMonth = new Date(year, month, 0).getDate();

  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) calendarDays.push(null);
  for (let i = 1; i <= daysInMonth; i++) calendarDays.push(i);

  return (
    <div className="FontArmAllegroU text-black text-center">
      <div className="grid grid-cols-7 gap-2 text-sm">
        {calendarDays.map((day, idx) =>
          day ? (
            <div
              key={idx}
              className=" relative py-2 rounded-full  text-3xl font-semibold flex items-center justify-center "
            >
              {day === highlightDay && (
                <Image
                  src="/icon2.png"
                  alt="icon1"
                  width={500}
                  height={500}
                  className="w-8 absolute -right-2 -top-2 rotate-20"
                />
              )}
              <p>{day}</p>
            </div>
          ) : (
            <div key={idx}></div>
          ),
        )}
      </div>
    </div>
  );
}
