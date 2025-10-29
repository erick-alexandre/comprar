import { FilterStatus } from "@/types/FilterStatus";
import { CircleDashed, CircleCheck } from "lucide-react-native";


export function StatusIcon({ status }: { status: FilterStatus }) {
    return (status === FilterStatus.PENDING ? 
        (<CircleDashed size={18} color={'#000000'} />)
        :
        (<CircleCheck size={19} color={'#2C46b1'} />))
}