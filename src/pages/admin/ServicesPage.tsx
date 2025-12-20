import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Calendar, DollarSign, User, CheckCircle, Clock, XCircle } from "lucide-react";

const userServices = [
  { id: 1, user: "Sarah Johnson", email: "sarah.j@email.com", service: "Bridal Makeup Package", purchaseDate: "Dec 18, 2025", expiryDate: "Dec 18, 2026", price: "$499", status: "Active", sessionsUsed: 2, totalSessions: 5 },
  { id: 2, user: "Emily Davis", email: "emily.d@email.com", service: "Hair Treatment Bundle", purchaseDate: "Dec 15, 2025", expiryDate: "Mar 15, 2026", price: "$280", status: "Active", sessionsUsed: 1, totalSessions: 4 },
  { id: 3, user: "Jessica Martinez", email: "jessica.m@email.com", service: "Monthly Spa Membership", purchaseDate: "Nov 20, 2025", expiryDate: "Dec 20, 2025", price: "$199/mo", status: "Expiring Soon", sessionsUsed: 3, totalSessions: 4 },
  { id: 4, user: "Amanda White", email: "amanda.w@email.com", service: "Nail Art Package", purchaseDate: "Dec 10, 2025", expiryDate: "Feb 10, 2026", price: "$150", status: "Active", sessionsUsed: 0, totalSessions: 3 },
  { id: 5, user: "Michelle Brown", email: "michelle.b@email.com", service: "Facial Treatment Course", purchaseDate: "Oct 05, 2025", expiryDate: "Dec 05, 2025", price: "$350", status: "Expired", sessionsUsed: 6, totalSessions: 6 },
];

const UserServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredServices = userServices.filter((item) => {
    const matchesSearch = item.user.toLowerCase().includes(searchTerm.toLowerCase()) || item.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || item.status.toLowerCase().replace(" ", "-") === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusIcon = (status: string) => {
    switch (status) { case "Active": return <CheckCircle className="w-4 h-4" />; case "Expiring Soon": return <Clock className="w-4 h-4" />; case "Expired": return <XCircle className="w-4 h-4" />; default: return null; }
  };

  const getStatusColor = (status: string) => {
    switch (status) { case "Active": return "bg-emerald-100 text-emerald-700 border-emerald-200"; case "Expiring Soon": return "bg-amber-100 text-amber-700 border-amber-200"; case "Expired": return "bg-red-100 text-red-700 border-red-200"; default: return "bg-muted text-muted-foreground"; }
  };

  const stats = { total: userServices.length, active: userServices.filter((s) => s.status === "Active").length, expiringSoon: userServices.filter((s) => s.status === "Expiring Soon").length, expired: userServices.filter((s) => s.status === "Expired").length };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div><h1 className="text-3xl font-display font-bold text-foreground">User Services</h1><p className="text-muted-foreground mt-1">Track services purchased by users</p></div>
        <Button className="gap-2 gradient-primary text-primary-foreground"><DollarSign className="w-4 h-4" />Export Report</Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="shadow-card border-0"><CardContent className="p-4"><div className="flex items-center gap-3"><div className="p-2 rounded-lg bg-blue-100"><User className="w-5 h-5 text-blue-600" /></div><div><p className="text-2xl font-bold text-foreground">{stats.total}</p><p className="text-xs text-muted-foreground">Total</p></div></div></CardContent></Card>
        <Card className="shadow-card border-0"><CardContent className="p-4"><div className="flex items-center gap-3"><div className="p-2 rounded-lg bg-emerald-100"><CheckCircle className="w-5 h-5 text-emerald-600" /></div><div><p className="text-2xl font-bold text-foreground">{stats.active}</p><p className="text-xs text-muted-foreground">Active</p></div></div></CardContent></Card>
        <Card className="shadow-card border-0"><CardContent className="p-4"><div className="flex items-center gap-3"><div className="p-2 rounded-lg bg-amber-100"><Clock className="w-5 h-5 text-amber-600" /></div><div><p className="text-2xl font-bold text-foreground">{stats.expiringSoon}</p><p className="text-xs text-muted-foreground">Expiring</p></div></div></CardContent></Card>
        <Card className="shadow-card border-0"><CardContent className="p-4"><div className="flex items-center gap-3"><div className="p-2 rounded-lg bg-red-100"><XCircle className="w-5 h-5 text-red-600" /></div><div><p className="text-2xl font-bold text-foreground">{stats.expired}</p><p className="text-xs text-muted-foreground">Expired</p></div></div></CardContent></Card>
      </div>

      <Card className="shadow-card border-0"><CardContent className="p-4"><div className="flex flex-col md:flex-row gap-4"><div className="relative flex-1"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" /><Input placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" /></div><div className="flex gap-2"><Button variant={statusFilter === "all" ? "default" : "outline"} size="sm" onClick={() => setStatusFilter("all")}>All</Button><Button variant={statusFilter === "active" ? "default" : "outline"} size="sm" onClick={() => setStatusFilter("active")}>Active</Button><Button variant={statusFilter === "expiring-soon" ? "default" : "outline"} size="sm" onClick={() => setStatusFilter("expiring-soon")}>Expiring</Button></div></div></CardContent></Card>

      <Card className="shadow-card border-0">
        <CardHeader><CardTitle className="font-display font-bold">Purchased Services</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader><TableRow><TableHead>User</TableHead><TableHead>Service</TableHead><TableHead>Purchase</TableHead><TableHead>Sessions</TableHead><TableHead>Price</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
            <TableBody>
              {filteredServices.map((item) => (
                <TableRow key={item.id} className="hover:bg-secondary/30">
                  <TableCell><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"><span className="text-sm font-bold text-primary">{item.user.split(" ").map((n) => n[0]).join("")}</span></div><div><p className="font-semibold text-foreground">{item.user}</p><p className="text-xs text-muted-foreground">{item.email}</p></div></div></TableCell>
                  <TableCell><p className="font-medium text-foreground">{item.service}</p></TableCell>
                  <TableCell><div className="flex items-center gap-2 text-muted-foreground"><Calendar className="w-4 h-4" /><span className="text-sm">{item.purchaseDate}</span></div></TableCell>
                  <TableCell><div className="flex items-center gap-2"><div className="w-16 h-2 bg-secondary rounded-full overflow-hidden"><div className="h-full bg-primary rounded-full" style={{ width: `${(item.sessionsUsed / item.totalSessions) * 100}%` }} /></div><span className="text-xs text-muted-foreground">{item.sessionsUsed}/{item.totalSessions}</span></div></TableCell>
                  <TableCell><span className="font-semibold text-foreground">{item.price}</span></TableCell>
                  <TableCell><Badge variant="outline" className={`gap-1 ${getStatusColor(item.status)}`}>{getStatusIcon(item.status)}{item.status}</Badge></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserServicesPage;