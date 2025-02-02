import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BadgePercent, CircleCheck, ShieldCheck } from "lucide-react";
import Link from "next/link";

console.log("You are doing good work my man")
const perks = [
    {
        name : 'No Commission',
        Icon : BadgePercent,
        description : 'We charge NO commission for any listings or purchases.' 
    },
    {
        name : 'Quality Listings',
        Icon : CircleCheck,
        description : 'All listings are admin approved, ensuring only quality listings.'
    },
    {
        name : 'SNU Exclusive',
        Icon : ShieldCheck,
        description : 'SNU email id required to sell and buy providing select and relevant offerings.'
    }
]

export default function Home() {
  return (
  <>
  <MaxWidthWrapper> 
    <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            SNU&apos;s exclusive <span className="gradient-text animate-gradient">commission-free</span> marketplace<span className="gradient-text animate-gradient">.</span>
            </h1>
        <p className="mt-6 text-lg text-muted-foreground">
            Welcome to DormDeals: your commission-free marketplace for buying and selling on campus!
            </p> 
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href = '/products' className={cn(buttonVariants(),"bg-lime-500")}>Browse Trending</Link>
            <Button variant='ghost'> Our quality promise &rarr;</Button>
        </div> 
        </div>
    </MaxWidthWrapper>
    <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20 mx-auto">
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
                {perks.map((perk) => (
                    <div key={perk.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"> 
                    <div className="md:flex-shrink-0 flex justify-center items-center">
                        <div className="h-16 w-16 flex items-center justify-center rounded-full bg-lime-100 text-lime-900">
                            {<perk.Icon className="h-1/2 w-1/2" />}
                        </div>
                    </div>

                    <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                        <h3 className="text-base text-gray-900 font-medium">{perk.name}</h3>
                        <p className="mt-3 text-sm text-muted-foreground">{perk.description}</p>
                    </div>
                </div>
                
                ))}
            </div>
        </MaxWidthWrapper>
    </section>
    </>
  );
}
