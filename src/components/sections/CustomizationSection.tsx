import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function CustomizationSection() {
  return (
    <section id="custom" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">
          Want Product Customization?
        </h2>

        <p className="text-gray-400 text-center mt-2 max-w-xl mx-auto">
          Get AI tailored to your workflows, policies, compliance and internal
          tools.
        </p>

        <form className="mt-10 grid gap-4 max-w-xl mx-auto">
          <Input placeholder="Full Name" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Role (CTO, COO, etc.)" />
          <textarea
            className="p-4 rounded-xl bg-white/5 border border-white/10 text-gray-100"
            rows={3}
            placeholder="What customization do you need?"
          />

          <Button className="w-full">Schedule Meeting</Button>
        </form>
      </div>
    </section>
  );
}
