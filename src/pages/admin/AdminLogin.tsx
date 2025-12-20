import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Sparkles } from "lucide-react";
import { toast } from "sonner";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login - replace with actual auth when Cloud is enabled
    setTimeout(() => {
      if (email && password) {
        toast.success("Welcome to Elan Beauty Admin!");
        navigate("/admin/dashboard");
      } else {
        toast.error("Please enter your credentials");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Decorative */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-burgundy" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full p-12 text-primary-foreground">
          <div className="mb-8 animate-fade-in">
            <Sparkles className="w-16 h-16 mb-4 mx-auto opacity-90" />
          </div>
          <h1 className="text-5xl font-display font-bold mb-4 text-center animate-slide-up">
            Elan Beauty
          </h1>
          <p className="text-xl opacity-90 text-center max-w-md animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Elevate your salon management with elegance and efficiency
          </p>
          <div className="mt-16 grid grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="text-center">
              <div className="text-3xl font-display font-bold">500+</div>
              <div className="text-sm opacity-80">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold">50+</div>
              <div className="text-sm opacity-80">Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold">4.9★</div>
              <div className="text-sm opacity-80">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md animate-scale-in">
          <div className="lg:hidden text-center mb-8">
            <Sparkles className="w-10 h-10 mx-auto text-primary mb-2" />
            <h1 className="text-3xl font-display font-bold text-foreground">Elan Beauty</h1>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-display font-semibold text-foreground">Welcome Back</h2>
            <p className="text-muted-foreground mt-2">Sign in to your admin dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@elanbeauty.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-input" />
                <span className="text-muted-foreground">Remember me</span>
              </label>
              <a href="#" className="text-primary hover:underline">
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
            //   variant="elegant"
              size="lg"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Signing in...
                </div>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Need help? Contact{" "}
            <a href="#" className="text-primary hover:underline">
              support@elanbeauty.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
