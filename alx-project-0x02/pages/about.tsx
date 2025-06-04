import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
   <>
    <Header />
     <div className="p-6">
      <h1 className="text-2xl font-bold">About Page</h1>
      
      <div className="space-x-4">
         <Button label="Small Button" size="small" shape="rounded-sm" />
        <Button label="Medium Button" size="medium" shape="rounded-md" />
        <Button label="Large Button" size="large" shape="rounded-full" />
      </div>
    </div>
   </>
  );
}
