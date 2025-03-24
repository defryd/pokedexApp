import { NavigationContainer } from '@react-navigation/native'
import { StackNavigatior } from './presentation/navigator/StackNavigator'

export const PokedexApp = () => {
    return (
        <NavigationContainer>
            <StackNavigatior />
        </NavigationContainer>
    )
}