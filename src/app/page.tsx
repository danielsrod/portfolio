import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselOptions,
} from "@/components/ui/carousel";

const infos = [
	{
		id: 1,
		ds_info: "My fullname is Daniel Sabino Rodrigues",
	},
	{
		id: 2,
		ds_info: "I was a professional footballer",
	},
	{
		id: 3,
		ds_info: "Actually, I'm good at barbecue",
	},
];

const carrouselOpts: CarouselOptions = {
	loop: true,
};

export default async function Home() {
	return (
		<main className="w-full h-[100vh] bg-zinc-500 flex row p-8 justify-around items-center">
			<div className="w-[60%] flex justify-center">
				<Carousel className="w-full max-w-xs" opts={carrouselOpts}>
					<CarouselContent>
						{infos.map((info) => (
							<CarouselItem key={info.id}>
								<div className="p-1">
									<Card className="bg-transparent border-none shadow-none">
										<CardContent className="flex aspect-square items-center justify-center p-6">
											<span className="text-4xl font-semibold">
												{info.ds_info}
											</span>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious variant={"ghost"} />
					<CarouselNext variant={"ghost"} />
				</Carousel>
			</div>
			<div className="w-[40%] h-96 flex justify-center">
				<Tabs defaultValue="sign-in" className="w-[350px]">
					<TabsList className="grid w-full grid-cols-2">
						<TabsTrigger value="sign-in">Sign in</TabsTrigger>
						<TabsTrigger value="sign-up">Sign up</TabsTrigger>
					</TabsList>
					<TabsContent value="sign-in">
						<Card className="w-[350px]">
							<CardHeader>
								<CardTitle>Hello again!</CardTitle>
								<CardDescription>Explore my project.</CardDescription>
							</CardHeader>
							<CardContent>
								<form>
									<div className="grid w-full items-center gap-4">
										<div className="flex flex-col space-y-1.5">
											<Label htmlFor="username">
												Username or email address
											</Label>
											<Input id="username" />
										</div>
										<div className="flex flex-col space-y-1.5">
											<Label htmlFor="password">Password</Label>
											<Input id="password" type="password" />
										</div>
									</div>
								</form>
							</CardContent>
							<CardFooter className="flex justify-end">
								<Button>Sign in</Button>
							</CardFooter>
						</Card>
					</TabsContent>
					<TabsContent value="sign-up">
						<Card className="w-[350px]">
							<CardHeader>
								<CardTitle>Welcome!</CardTitle>
							</CardHeader>
							<CardContent>
								<form>
									<div className="grid w-full items-center gap-4">
										<div className="flex flex-col space-y-1.5">
											<Label htmlFor="emailaddress">Email address</Label>
											<Input id="emailaddress" type="email" />
										</div>
									</div>
								</form>
							</CardContent>
							<CardFooter className="flex justify-end">
								<Button>Sign up</Button>
							</CardFooter>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
		</main>
	);
}
