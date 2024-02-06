import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FeaturedMenu } from ".";


export function PopularMenus() {
  return (
    <Tabs defaultValue="burger">
      <TabsList className="grid auto-fit-tabs gap-5 max-w-full  sm:max-w-[95%] mx-auto border border-green-600">
        <TabsTrigger value="burger">
          <img className="mr-1" src="/burger-svgrepo-com.svg" alt="" />
          Burger
        </TabsTrigger>
        <TabsTrigger value="pizza">
          <img className="mr-1" src="/pizza-svgrepo-com.svg" alt="" />
          Pizza
        </TabsTrigger>
        <TabsTrigger value="sushi">
          <img className="mr-1" src="/sushi-svgrepo-com.svg" alt="" />
          Sushi
        </TabsTrigger>
        <TabsTrigger value="salad">
          <img className="mr-1" src="/salad-svgrepo-com.svg" alt="" />
          Salad
        </TabsTrigger>
        <TabsTrigger value="burrito">
          <img className="mr-1" src="/burrito-svgrepo-com.svg" alt="" />
          Burrito
        </TabsTrigger>
        <TabsTrigger value="beverage" className="px-12 sm:px-3">
          <img className="mr-1" src="/beverage-svgrepo-com.svg" alt="" />
          Beverages
        </TabsTrigger>
        <TabsTrigger value="fast_foods" className="px-16 sm:px-3">
          <img className="mr-1" src="/french-fries-svgrepo-com.svg" alt="" />
          Fries
        </TabsTrigger>
      </TabsList>
      <div className="px-10">
        <TabsContent value="burger">
          {FeaturedMenu(
            "http://localhost:5000/api/specialBurger",
            "specialBurger"
          )}
        </TabsContent>
        <TabsContent value="pizza">
          {FeaturedMenu(
            "http://localhost:5000/api/specialPizza",
            "specialPizza"
          )}
        </TabsContent>
        <TabsContent value="sushi">
          {FeaturedMenu(
            "http://localhost:5000/api/specialSushi",
            "specialSushi"
          )}
        </TabsContent>
        <TabsContent value="salad">
          {FeaturedMenu(
            "http://localhost:5000/api/specialSalad",
            "specialSalad"
          )}
        </TabsContent>
        <TabsContent value="burrito">Burrito 1</TabsContent>
        <TabsContent value="beverage">Beverages 1</TabsContent>
        <TabsContent value="fast_foods">Fast Foods 1</TabsContent>
        <TabsContent value="password"></TabsContent>
      </div>
    </Tabs>
  );
}
