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

export default function Home() {
	return (
		<main className="w-full h-[100vh] bg-zinc-500 flex row p-8 justify-around items-center">
			<div className="w-[60%]">
				<p>slide or carrousel apresentation</p>
			</div>
			<div className="w-[40%] h-96 flex justify-start">
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
											<Input id="password" />
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
											<Input id="emailaddress" />
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
