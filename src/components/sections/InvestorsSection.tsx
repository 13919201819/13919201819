import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function InvestorsSection() {
  return (
    <section id="investors" className="py-20 bg-black/30 border-y border-white/10">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">
          For Investors: AI That Compounds
        </h2>

        <p className="text-gray-400 text-center mt-2 max-w-xl mx-auto">
          Join us in building future-proof AI SaaS clusters with clear unit
          economics and mission-critical utility.
        </p>

        <form className="mt-10 grid gap-4 max-w-xl mx-auto">
          <Input placeholder="Name" />
          <Input placeholder="Fund / Organization" />
          <Input placeholder="Email" type="email" />
          <textarea
            className="p-4 rounded-xl bg-white/5 border border-white/10 text-gray-100"
            rows={3}
            placeholder="Your investment thesis..."
          />

          <Button variant="outline" className="w-full">
            Request Deck & Data Room
          </Button>
        </form>
      </div>
    </section>
  );
}
