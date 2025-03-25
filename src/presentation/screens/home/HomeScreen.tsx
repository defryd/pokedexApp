import { FlatList, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import { getPokemons } from '../../../actions/pokemons'
import { useInfiniteQuery } from '@tanstack/react-query'
import { PokeballBg } from '../../components/ui/PokeballBg'
import { globalTheme } from '../../../config/theme/global-theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PokemonCard } from '../../components/pokemons/PokemonCard'

export const HomeScreen = () => {
    const {top} = useSafeAreaInsets();

    const { isLoading, data, fetchNextPage } = useInfiniteQuery({
        queryKey: ['pokemons', 'infinite'],
        initialPageParam: 0,
        queryFn: ( params ) => getPokemons(params.pageParam),
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.length < 20) return undefined;
            return pages.length;
        },
        staleTime: 1000 * 60 * 60,
    })
    
    return (
        <View style={globalTheme.globalMargin}>

            <PokeballBg style={styles.imgPosition} />

            <FlatList
                data={data?.pages.flat() ?? []}
                keyExtractor={(pokemon, index) => `${pokemon.id}-${index}`}
                numColumns={2}
                style={{ paddingTop: top + 20 }}
                ListHeaderComponent={() => (
                    <Text variant="displayMedium">Pokédex</Text>
                )}
                renderItem={({ item }) => (
                    <PokemonCard pokemon={item} />
                )}
                onEndReachedThreshold={0.6}
                onEndReached={() => fetchNextPage()}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    imgPosition: {
        position: 'absolute',
        top: -100,
        right: -100,
    },
})
