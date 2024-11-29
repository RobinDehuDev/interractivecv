import { Calendar, FileText, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { ActionButton } from "../components/custom/CustomButton";
import { env } from "~/env";

export default async function Home() {
  const regex = /^(\+\d\d\d)(\d)(\d\d)(\d\d)(\d\d)/;
  const match = env.PHONE.match(regex);
  const formattedPhone = match
    ? `${match[1]} ${match[2]} ${match[3]} ${match[4]} ${match[5]}`
    : "";
  return (
    <main className="flex h-screen w-full flex-col items-center gap-8 md:flex-row md:justify-evenly md:gap-20 md:p-56">
      <div className="mt-20 flex flex-col gap-10 md:mt-0">
        <h1 className="text-4xl font-bold">Robin DEHU</h1>
        <h2 className="text-2xl">Dev FullStack</h2>
        <div className="space-y-8">
          <Link
            href={`mailto:${env.EMAIL}`}
            className="flex items-center text-blue-300 hover:text-blue-600"
          >
            <Mail className="mr-2 h-5 w-5" />
            {env.EMAIL}
          </Link>
          <Link
            href={`tel:${env.PHONE}`}
            className="flex items-center text-blue-300 hover:text-blue-600"
          >
            <Phone className="mr-2 h-5 w-5" />
            {formattedPhone}
          </Link>
        </div>
      </div>
      <div className="mt-20 flex flex-col gap-8 md:mt-0 md:gap-16">
        <ActionButton innerClassName="h-12 w-56" href="/cv">
          <FileText className="mr-4 h-6 w-6" /> Mon CV
        </ActionButton>
        <ActionButton innerClassName="h-12 w-56" href={env.CALENDLY}>
          <Calendar className="mr-4 h-6 w-6" /> rendez-vous
        </ActionButton>
      </div>
    </main>
  );
}
