import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Tag, Truck, LogIn, UserPlus } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="py-6 px-4 md:px-6 lg:px-8 border-b">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Supplyium</h1>
          <nav className="space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/login">
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Link>
            </Button>
            <Button asChild>
              <Link href="/signup">
                <UserPlus className="w-4 h-4 mr-2" />
                Sign Up
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <section className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Welcome to Supplyium</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your global marketplace for buyers, sellers, and forwarders. Connect, trade, and grow your business with ease.
            </p>
          </section>

          <section className="grid gap-8 md:grid-cols-3 mb-16">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShoppingCart className="w-5 h-5 mr-2 text-primary" />
                  Buy Adverts
                </CardTitle>
                <CardDescription>Find products and materials you need</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <Link href="/buy-adverts">
                    Browse Buy Adverts
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Tag className="w-5 h-5 mr-2 text-primary" />
                  Sell Adverts
                </CardTitle>
                <CardDescription>List your products for global buyers</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <Link href="/sell-adverts">
                    Browse Sell Adverts
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="w-5 h-5 mr-2 text-primary" />
                  Forwarder Adverts
                </CardTitle>
                <CardDescription>Connect with logistics providers</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <Link href="/forwarder-adverts">
                    Browse Forwarder Adverts
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </section>

          <section className="text-center bg-secondary p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">How It Works</h3>
            <ol className="list-decimal list-inside text-left max-w-2xl mx-auto space-y-4">
              <li>Sign up as a buyer, seller, or forwarder (or all three!)</li>
              <li>Create or browse adverts in your industry</li>
              <li>Make offers on adverts or receive offers on your listings</li>
              <li>Connect with potential partners and grow your business</li>
              <li>Complete transactions securely through our platform</li>
            </ol>
          </section>
        </div>
      </main>

      <footer className="py-6 px-4 md:px-6 lg:px-8 border-t mt-12 bg-secondary">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Supplyium. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
