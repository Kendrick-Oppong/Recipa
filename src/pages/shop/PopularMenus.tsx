import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FeaturedMenu } from ".";
import { BACKEND_URL, menu } from "@/constants/constants";

export function PopularMenus() {
  return (
    <Tabs defaultValue="burgers" className="mx-4">
      <TabsList className="grid auto-fit-tabs px-5 mx-auto gap-5 max-w-full  sm:max-w-[95%]  border border-green600">
        {menu.map((menu) => (
          <TabsTrigger key={menu.title} value={menu.title.toLowerCase()}>
            <img className="hidden mr-1 md:inline" src={menu.src} alt="" />
            {menu.title}
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="md:px-10">
        <TabsContent value="burgers">
          {FeaturedMenu(`${BACKEND_URL}/api/specialBurger`, "specialBurger")}
        </TabsContent>
        <TabsContent value="pizzas">
          {FeaturedMenu(`${BACKEND_URL}/api/specialPizza`, "specialPizza")}
        </TabsContent>
        <TabsContent value="sushis">
          {FeaturedMenu(`${BACKEND_URL}/api/specialSushi`, "specialSushi")}
        </TabsContent>
        <TabsContent value="salads">
          {FeaturedMenu(`${BACKEND_URL}/api/specialSalad`, "specialSalad")}
        </TabsContent>
        <TabsContent value="burritos">
          {FeaturedMenu(`${BACKEND_URL}/api/specialBurrito`, "specialBurrito")}
        </TabsContent>
        <TabsContent value="beverages">
          {FeaturedMenu(
            `${BACKEND_URL}/api/specialBeverage`,
            "specialBeverage"
          )}
        </TabsContent>
        <TabsContent value="fries">
          {FeaturedMenu(`${BACKEND_URL}/api/specialFries`, "specialFries")}
        </TabsContent>
      </div>
    </Tabs>
  );
}
