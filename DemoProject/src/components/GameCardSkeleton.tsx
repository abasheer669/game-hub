
import { SkeletonText } from "@chakra-ui/react"
import { Skeleton } from "@chakra-ui/react"
import {Card} from "@chakra-ui/react"

const GameCardSkeleton = () => {
  return (
   <Card.Root>
    <Skeleton height="200px"/>
    <Card.Body>
        <SkeletonText />
    </Card.Body>
   </Card.Root>
  )
}

export default GameCardSkeleton