
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, QrCode } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-dark-gradient relative overflow-hidden flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="text-left">
            {/* Event Badge */}
            <div className="mb-8 animate-fade-in">
              <Badge className="bg-purple-600/30 text-purple-200 border-purple-500/50 text-lg px-6 py-2 rounded-full backdrop-blur-sm">
                FIRESIDE CHAT
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 mb-6 leading-tight">
                AI & WEB3 SYNERGY:
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                BUILDING SMARTER ECONOMIES
              </h2>
            </div>

            {/* Event Details */}
            <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-purple-400" />
                  <span className="text-white font-semibold">JUNE 18, 2025</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <span className="text-white">16:30 - 17:15 HRS. (GMT+7)</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                FREE REGISTER
              </Button>
            </div>

            {/* Partners */}
            <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center space-x-8 text-white/60">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold">SCB</span>
                  <span className="text-xl">10X</span>
                </div>
                <div className="w-px h-8 bg-white/20"></div>
                <span className="text-xl font-semibold">Bloomberg</span>
              </div>
            </div>
          </div>

          {/* Right Content - Single Card with Main Image and Member Line */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {/* Single Main Card */}
            <div className="relative bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-xl border border-white/20 rounded-3xl p-8 min-h-[500px]">
              {/* QR Code */}
              <div className="absolute top-6 right-6 z-20">
                <div className="bg-white p-2 rounded-lg">
                  <QrCode className="h-12 w-12 text-black" />
                </div>
              </div>

              {/* Main Central Speaker Image */}
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-56 h-56 bg-gray-800/50 rounded-3xl flex items-center justify-center border-2 border-dashed border-gray-600 z-10">
                <span className="text-gray-400 text-lg">Main Speaker</span>
                {/* Hidden Description Box */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-purple-600/10 to-blue-600/10 backdrop-blur-sm border border-white/5 rounded-lg px-3 py-1 opacity-0">
                  <span className="text-white/80 text-sm">Lead Speaker</span>
                </div>
              </div>

              {/* Member Images in One Line */}
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
                {/* Member 1 */}
                <div className="relative">
                  <div className="w-24 h-24 bg-gray-800/20 rounded-2xl flex items-center justify-center border border-dashed border-gray-600/30 opacity-30">
                    <span className="text-gray-400 text-xs">M1</span>
                  </div>
                  {/* Hidden Description Box */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-purple-600/5 to-blue-600/5 backdrop-blur-sm border border-white/5 rounded-md px-2 py-1 opacity-0">
                    <span className="text-white/60 text-xs">Member 1</span>
                  </div>
                </div>

                {/* Member 2 */}
                <div className="relative">
                  <div className="w-24 h-24 bg-gray-800/20 rounded-2xl flex items-center justify-center border border-dashed border-gray-600/30 opacity-30">
                    <span className="text-gray-400 text-xs">M2</span>
                  </div>
                  {/* Hidden Description Box */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-purple-600/5 to-blue-600/5 backdrop-blur-sm border border-white/5 rounded-md px-2 py-1 opacity-0">
                    <span className="text-white/60 text-xs">Member 2</span>
                  </div>
                </div>

                {/* Member 3 */}
                <div className="relative">
                  <div className="w-24 h-24 bg-gray-800/20 rounded-2xl flex items-center justify-center border border-dashed border-gray-600/30 opacity-30">
                    <span className="text-gray-400 text-xs">M3</span>
                  </div>
                  {/* Hidden Description Box */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-purple-600/5 to-blue-600/5 backdrop-blur-sm border border-white/5 rounded-md px-2 py-1 opacity-0">
                    <span className="text-white/60 text-xs">Member 3</span>
                  </div>
                </div>

                {/* Member 4 */}
                <div className="relative">
                  <div className="w-24 h-24 bg-gray-800/20 rounded-2xl flex items-center justify-center border border-dashed border-gray-600/30 opacity-30">
                    <span className="text-gray-400 text-xs">M4</span>
                  </div>
                  {/* Hidden Description Box */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-purple-600/5 to-blue-600/5 backdrop-blur-sm border border-white/5 rounded-md px-2 py-1 opacity-0">
                    <span className="text-white/60 text-xs">Member 4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
