import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function PopularMenus() {
  return (
    <Tabs defaultValue="burger" className=" ">
      <TabsList className="grid auto-fit-tabs gap-5 max-w-full  sm:max-w-[95%] mx-auto border border-green-600">
        <TabsTrigger value="burger">Burger</TabsTrigger>
        <TabsTrigger value="pizza">Pizza</TabsTrigger>
        <TabsTrigger value="sushi">Sushi</TabsTrigger>
        <TabsTrigger value="salad">Salad</TabsTrigger>
        <TabsTrigger value="burrito">Burrito</TabsTrigger>
        <TabsTrigger value="beverage" className="px-12 sm:px-3">
          Beverages
        </TabsTrigger>
        <TabsTrigger value="fast_foods" className="px-16 sm:px-3">
          Fast Food
        </TabsTrigger>
      </TabsList>
      <TabsContent value="burger">Burger 1</TabsContent>
      <TabsContent value="pizza">Pizza 1</TabsContent>
      <TabsContent value="sushi">Sushi 1</TabsContent>
      <TabsContent value="salad">Salad 1</TabsContent>
      <TabsContent value="burrito">Burrito 1</TabsContent>
      <TabsContent value="beverage">Beverages 1</TabsContent>
      <TabsContent value="fast_foods">Fast Foods 1</TabsContent>
      <TabsContent value="password"></TabsContent>
    </Tabs>
  );
}
