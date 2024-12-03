import { Separator } from "@/components/ui/separator";
import {
  reserveCountAtom,
  reserveDateAtom,
  selectedRoomsAtom,
  totalAmountAtom,
} from "@/store/reserve";
import { format, formatDistance } from "date-fns";
import { useAtom } from "jotai";

const CheckBookingDetail = () => {
  const [selectedRooms] = useAtom(selectedRoomsAtom);
  const [reserveCount] = useAtom(reserveCountAtom);
  const [totalAmount] = useAtom(totalAmountAtom);
  const [date] = useAtom(reserveDateAtom);
  const nights = parseInt(
    date?.from && date?.to && formatDistance(date?.from, date?.to)
  );
  return (
    <div className="space-y-3">
      <div>
        <p className="font-bold text-textsm">
          Stays: {nights} night{nights > 1 && "s"}
        </p>
        <p className="font-bold text-textsm">
          Guests: {reserveCount.adults} adult{reserveCount.adults > 1 && "s"},{" "}
          {reserveCount.children} child{reserveCount.adults > 1 && "ren"}
        </p>
      </div>

      <Separator />

      <div className="grid grid-cols-5">
        <div className="col-span-2">
          <h2 className="text-textsm">Check-in</h2>
          <p className="font-bold">{format(date?.from, "PPPP")}</p>
          <p className="text-black/60 text-textsm">From 15:00</p>
        </div>
        <div className="flex justify-center">
          <Separator orientation="vertical" />
        </div>
        <div className="col-span-2">
          <h2 className="text-textsm">Check-out</h2>
          <p className="font-bold">{format(date?.to, "PPPP")}</p>
          <p className="text-black/60 text-textsm">Until 11:00</p>
        </div>
      </div>

      <Separator />
      {selectedRooms.map((product, index) => (
        <div key={index} className="space-y-3">
          <div className="flex gap-4">
            <div className="w-full flex justify-between">
              <div>
                <h2 className="font-bold">{product.room?.category?.name}</h2>
              </div>
            </div>
          </div>

          {product.extras && (
            <div className="flex gap-4 text-textsm">
              <div className="w-full flex justify-between">
                <ul className="w-full space-y-2 list-disc pl-2">
                  {product.extras?.map((extra, index) => (
                    <li
                      key={index}
                      className="w-full flex justify-between text-textsm text-black/80"
                    >
                      <h2>{extra.name}</h2>
                    </li>
                  ))}
                  {/* <h2>{product.room?.category?.name}</h2>
                          <span className="text-textsm text-black/60">
                            {product.room?.unitPrice}₮ x {nights} nights
                          </span> */}
                </ul>
              </div>
            </div>
          )}
        </div>
      ))}

      <Separator />

      <div className="">
        <div className="flex justify-between font-bold">
          <span>Price</span>
          <span>{totalAmount}₮</span>
        </div>
      </div>
    </div>
  );
};
export default CheckBookingDetail;
