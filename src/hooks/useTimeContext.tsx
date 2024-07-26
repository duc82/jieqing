import { useContext } from "react";
import { TimeContext } from "@/providers/TimeProvider";

export default function useTimeContext() {
  return useContext(TimeContext);
}
