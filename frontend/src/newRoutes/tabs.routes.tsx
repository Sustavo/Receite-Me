import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeSvg from "../assets/tabNavigation/GreenHome.svg"
import SearchSvg from "../assets/tabNavigation/BlackSearch.svg"
import FavoritesSvg from "../assets/tabNavigation/BlackHeart.svg"
import ProfileSvg from "../assets/tabNavigation/BlackProfile.svg"
import { HomeRoutes } from "./home.routes";
import SearchByIngredients from "../pages/SearchByIngredients";
import Favorites from "../pages/FavoriteBook";
import { ProfileRoutes } from "./profile.routes";


export function TabsRoutes() {

    const { Navigator, Screen } = createBottomTabNavigator();

    return (
        <Navigator screenOptions={{ 
            headerShown: false, tabBarShowLabel: false,
         }}>
            <Screen 
                name="homeRoutes" 
                component={HomeRoutes}
                options={{ 
                    tabBarIcon: () => <HomeSvg/>
                }}
            />

            <Screen 
                name="search"  
                component={SearchByIngredients}
                options={{
                    tabBarIcon: () => <SearchSvg/>
                }}
            />

            <Screen 
                name="favorites" 
                component={Favorites}
                options={{
                    tabBarIcon: () => <FavoritesSvg/>
                }}
            />

            <Screen 
                name="profileRoutes" 
                component={ProfileRoutes}
                options={{
                    tabBarIcon: () => <ProfileSvg/>
                }}
            />

        </Navigator>
    );

}
