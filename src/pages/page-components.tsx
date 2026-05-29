import Text from "../components/text"
import TrashIcon from "../assets/icons/Trash-Regular.svg?react"
import Spinner from "../assets/icons/spinner.svg?react"
import PlusIcon from "../assets/icons/Plus-Regular.svg?react"
import Icon from "../components/icon"
import Badge from "../components/badge"
import Button from "../components/button"
import ButtonIcon from "../components/button-icon"
import InputText from "../components/input-text"
import InputCheckBox from "../components/input-checkbox"
import Card from "../components/card"
import Container from "../components/container"
import Skeleton from "../components/skeleton"

export default function PageComponents() {
  return (
    <Container>
      <div className="grid gap-10">
        <div className="flex gap-2">
          <Text variant="body-sm-bold" className="text-pink-dark">
            Hello World!
          </Text>
          <Text className="text-green-base">
            Hello World!
          </Text>
          <Text variant="body-md-bold">
            Hello World!
          </Text>
        </div>

        <div className="flex gap-2">
          <Icon svg={TrashIcon} className="fill-pink-base"/>
          <Icon svg={Spinner} className="fill-green-base" animate />
        </div>

        <div className="flex gap-2">
          <Badge variant="secondary">5</Badge>
          <Badge variant="primary">2 de 5</Badge>

          <Badge loading>2 de 5</Badge>
        </div>

        <div className="flex gap-2">
          <Button icon={PlusIcon}>Nova Tarefa</Button>
          <Button icon={PlusIcon} handling>Nova Tarefa</Button>
        </div>
        <div className="flex gap-2">
          <ButtonIcon icon={TrashIcon}/>
          <ButtonIcon icon={TrashIcon} variant="secondary"/>
          <ButtonIcon icon={TrashIcon} variant="tertiary"/>

          <ButtonIcon icon={TrashIcon} variant="tertiary" loading/>
          <ButtonIcon icon={TrashIcon} variant="tertiary" handling/>
        </div>
        <div className="flex gap-2">
          <InputText />
        </div>
        <div className="flex gap-2">
          <InputCheckBox />
          <InputCheckBox loading/>
        </div>
        <div className="flex gap-2">
          <Card size="md">Nova Tarefa</Card>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-6"/>
          <Skeleton className="h-6"/>
          <Skeleton className="h-6"/>
        </div>
      </div>
    </Container>
  )
}
