import Text from "./components/text"
import TrashIcon from "./assets/icons/Trash.svg?react";
import CheckIcon from "./assets/icons/Check-Regular.svg?react";
import PencilIcon from "./assets/icons/PencilSimple-Regular.svg?react";
import PlusIcon from "./assets/icons/Plus-Regular.svg?react"
import SpinnerIcon from "./assets/icons/spinner.svg?react"
import XIcon from "./assets/icons/X-Regular.svg?react"
import Icon from "./components/icon";


export default function App() {
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-1">
        <Text variant="body-sm-bold" className="text-pink-base">
          olá mundo
        </Text>
        <Text className="text-green-base">Olá mundo</Text>
        <Text variant="body-md-bold">Olá mundo</Text>
        <Text>Levar dog para passear</Text>
      </div>

      <div>
        < Icon svg={TrashIcon} className="fill-pink-base" />
        < Icon svg={CheckIcon} className="fill-pink-base" />
        < Icon svg={PlusIcon} className="fill-pink-base" />
        < Icon svg={PencilIcon} className="fill-pink-base" />
        < Icon svg={SpinnerIcon} animate />
        < Icon svg={XIcon} className="fill-pink-base" />
      </div>

    </div>
  )
}


