import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FeaturedMenu } from ".";
import { menu } from "@/constants/constants";

export function PopularMenus() {
  return (
    <Tabs defaultValue="burgers"className="mx-4">
      <TabsList className="grid auto-fit-tabs px-5 mx-auto gap-5 max-w-full  sm:max-w-[95%]  border border-green-600">
        {menu.map((menu) => (
          <TabsTrigger key={menu.title} value={menu.title.toLowerCase()}>
            <img className="mr-1 hidden md:inline" src={menu.src} alt="" />
            {menu.title}
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="md:px-10">
        <TabsContent value="burgers">
          {FeaturedMenu(
            "http://localhost:5000/api/specialBurger",
            "specialBurger"
          )}
        </TabsContent>
        <TabsContent value="pizzas">
          {FeaturedMenu(
            "http://localhost:5000/api/specialPizza",
            "specialPizza"
          )}
        </TabsContent>
        <TabsContent value="sushis">
          {FeaturedMenu(
            "http://localhost:5000/api/specialSushi",
            "specialSushi"
          )}
        </TabsContent>
        <TabsContent value="salads">
          {FeaturedMenu(
            "http://localhost:5000/api/specialSalad",
            "specialSalad"
          )}
        </TabsContent>
        <TabsContent value="burritos">
          {FeaturedMenu(
            "http://localhost:5000/api/specialBurrito",
            "specialBurrito"
          )}
        </TabsContent>
        <TabsContent value="beverages">
          {FeaturedMenu(
            "http://localhost:5000/api/specialBeverage",
            "specialBeverage"
          )}
        </TabsContent>
        <TabsContent value="fries">
          {FeaturedMenu(
            "http://localhost:5000/api/specialFries",
            "specialFries"
          )}
        </TabsContent>
      </div>
    </Tabs>
  );
}
