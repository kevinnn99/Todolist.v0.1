import Text from "./components/text"
import TrashIcon from "./assets/icons/Trash.svg?react";
import CheckIcon from "./assets/icons/Check-Regular.svg?react";
import PencilIcon from "./assets/icons/PencilSimple-Regular.svg?react";
import PlusIcon from "./assets/icons/Plus-Regular.svg?react"
import SpinnerIcon from "./assets/icons/spinner.svg?react"
import XIcon from "./assets/icons/X-Regular.svg?react"
import Icon from "./components/icon";
import Badge from "./components/badge";
import Button from "./components/buttons";
import ButtonIcon from "./components/button-icon";
import InputText from "./components/input-text";
import InputCheckbox from "./components/input-checkbox";
import Card from "./components/card";
import Container from "./components/container";
import Skeleton from "./components/skeleton";





export default function App() {
  return (
    <Container>
      <div className="grid gap-5">
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
        <div className="space-x-2">
          <Badge variant="secondary">5</Badge>
          <Badge variant="primary">2 de 5</Badge>
          <Badge loading >5</Badge>
        </div>

        <div>
          <Button icon={PlusIcon}> Nova tarefa </Button>
        </div>

        <div className="flex gap-1">
          <ButtonIcon icon={TrashIcon} />
          <ButtonIcon icon={TrashIcon} variant="secondary" />
          <ButtonIcon icon={TrashIcon} variant={"tertiary"} />
        </div>
        <div>
          <InputText />
        </div>
        <div>
          <InputCheckbox />
        </div>
        <div>
          <Card size="md">Ola mundo</Card>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-6" />
          <Skeleton className="h-6" />
          <Skeleton className="w-96 h-6" />
        </div>

      </div>
    </Container>
  )
}


