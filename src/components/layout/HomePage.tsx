import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import Navbar from "./Navbar";
import { Wallet, Send, History, Lock, TrendingUp, Eye } from "lucide-react";

export default function HomePage() {
  const features = [
    {
      icon: Wallet,
      title: "Deposit Money",
      description: "Quickly add funds to your Monetra wallet with ease.",
    },
    {
      icon: TrendingUp,
      title: "Withdraw Funds",
      description: "Withdraw your money anytime, directly to your account.",
    },
    {
      icon: Send,
      title: "Transfer Money",
      description: "Send money to friends and family instantly.",
    },
    {
      icon: History,
      title: "Transaction History",
      description: "Track all your transactions in one place.",
    },
    {
      icon: Lock,
      title: "Secure Login",
      description: "Bank-level security to protect your account.",
    },
    {
      icon: Eye,
      title: "Dashboard Overview",
      description: "Monitor your finances with an intuitive dashboard.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Navbar isLandingPage={true} />

      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                  Monetra
                </h1>
                <p className="text-xl md:text-2xl text-emerald-600 font-semibold italic">
                  Your Money, Your Mantra
                </p>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed max-w-lg pb-2">
                A simple digital wallet system for managing deposits,
                withdrawals, transfers, and transaction tracking.
              </p>

              <div className="flex gap-4 mx-10 py-4">
                <Link to="/login" className="flex-1">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full py-6 text-base rounded-lg border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  >
                    Sign In
                  </Button>
                </Link>

                <Link to="/signup" className="flex-1">
                  <Button
                    size="lg"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-base rounded-lg"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right - Mock Card Illustration */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm">
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-3xl blur-2xl opacity-50"></div>

                {/* Mock Card */}
                <div className="relative bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="space-y-12">
                    {/* Card Header */}
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-emerald-200 text-sm mb-2">
                          Total Balance
                        </p>
                        <p className="text-4xl font-bold">₱12,450.50</p>
                      </div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400">
                        <Wallet size={22} />
                      </div>{" "}
                    </div>

                    {/* Card Details */}
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-emerald-200">Account Number</span>
                        <span className="font-mono">•••• •••• 4829</span>
                      </div>
                      {/* <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-emerald-200 text-xs mb-1">
                            Card Holder
                          </p>
                          <p className="font-semibold">Juan Cruz</p>
                        </div>
                        <div>
                          <p className="text-emerald-200 text-xs mb-1">
                            Expires
                          </p>
                          <p className="font-semibold">12/28</p>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple Core Features
            </h2>
            <p className="text-lg text-gray-600">
              Everything a simple banking system must have
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-start gap-4 mb-4 ">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-100 rounded-lg md:rounded-xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300">
                      <IconComponent className="w-5 h-5 md:w-7 md:h-7 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                    </div>

                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-nowrap">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 md:py-20 flex flex-col">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-3xl p-12 md:p-16 border border-emerald-300">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto py-4">
              Create your Monetra account today and experience a simple banking
              system
            </p>
            <div className="flex gap-4 justify-center mt-4">
              <Link to="/signup">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-base rounded-lg"
                >
                  Create Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-emerald-50 py-12 border-t border-emerald-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-4">
            <p className="text-base text-gray-700 font-medium">Monetra</p>
            <p className="text-xs text-gray-500">
              © 2026 Monetra. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
