// import bg from "@/assets/background/bg.png";
// import Image from "next/image";
// import "@/styles/style.css";
import entrp1 from "@/assets/enterprise/pwc-1.webp";
import entrp2 from "@/assets/enterprise/pwc-2.webp";
import entrp3 from "@/assets/enterprise/pwc-3.webp";
import entrp4 from "@/assets/enterprise/pwc-4.webp";
import entrp5 from "@/assets/enterprise/pwc-5.webp";

import Image from "next/image";

const Enterprises = () => {
  return (
    <section className="bg-neutral-9 py-20">
      <div class="animated-border"></div>
      <div className="my-container">
        <div className="flex flex-col items-center gap-3">
          <p>Brainhub is a software engineering agency trusted by 80+ US & European startups, scale-ups & enterprises.</p>
          <div className="flex ">
            <Image width={220} height={81} src={entrp1} alt="entrap" />
            <Image width={220} height={81} src={entrp2} alt="entrap" />
            <Image width={220} height={81} src={entrp3} alt="entrap" />
            <Image width={220} height={81} src={entrp4} alt="entrap" />
            <Image width={220} height={81} src={entrp5} alt="entrap" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enterprises;
