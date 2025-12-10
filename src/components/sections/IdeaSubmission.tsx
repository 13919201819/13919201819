import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function IdeaSubmissionSection() {
  return (
    <section id="idea" className="py-20 bg-black/30 border-y border-white/10">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Drop Your Idea</h2>
        <p className="text-gray-400 text-center mt-2 max-w-xl mx-auto">
          Share an idea that brings efficiency, value and symbiotic growth for
          both clients and consumers.
        </p>

        <form className="mt-10 grid gap-4 max-w-xl mx-auto">
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" type="email" />
          <Input placeholder="Organization" />
          <textarea
            className="p-4 rounded-xl bg-white/5 border border-white/10 text-gray-100"
            rows={4}
            placeholder="Describe your idea..."
          />

          <Button className="w-full">Submit Idea</Button>
        </form>
      </div>
    </section>
  );
}
