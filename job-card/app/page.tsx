import Card from "@/components/jobCard";
import Image from "next/image";
import avatar from '../images/image 2.png';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card
        title="Social Media Assistant"
        description="As a Social Media Assistant, you will work closely with the social media manager or marketing team to execute social media strategies and campaigns. You will be responsible for assisting in the creation and scheduling of engaging content, monitoring social media channels, and interacting with followers."
        position="In Person"
        tags={["Education", "IT"]}
        company="Young Men Christians Association"
        address="Addis Ababa, Ethiopia"
        avatar={avatar}
      ></Card>
    </main>
  );
}
