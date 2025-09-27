import { List } from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";
import { ListItem } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

import getCroppedImageUrl from "@/services/image-url";
import { Spinner } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

interface Props{
    onSlectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}


const GenreList = ({selectedGenre, onSlectGenre}: Props) => {
  const { data, isLoading , error} = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner/>

  return (
    <>
    <Heading fontSize='1xl' marginBottom={3} >Genres</Heading>
    <List.Root>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack>
            <Image objectFit='cover' boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
            <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'bold': 'normal'} onClick={()=> onSlectGenre(genre)} fontSize='lg'variant='link' > {genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
    </>

  );
};

export default GenreList;
