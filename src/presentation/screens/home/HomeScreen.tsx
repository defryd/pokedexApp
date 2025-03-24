import { View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { getPokemons } from '../../../actions/pokemons'
import { useQuery } from '@tanstack/react-query'

export const HomeScreen = () => {

    const { isLoading, data = [] } = useQuery({
        queryKey: ['pokemons'], 
        queryFn: () => getPokemons(0),
        staleTime: 1000 * 60 * 60,
    })

    return (
        <View>
            <Text>HomeScreen</Text>
            <Button mode="contained" onPress={() => console.log('Pressed')}>
                Press me
            </Button>
        </View>
    )
}