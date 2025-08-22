import React from "react"

type LinkItem = { name: string; link: string };

type SourcesProps = {
  title: string;
  links: LinkItem[];
};

function Sources({ title, links }: SourcesProps) {
  return (
    <div>
      <p className="font-medium text-gray-900 dark:text-white">{title}</p>

      <ul className="mt-6 space-y-4 text-sm">
        {links.map((item) => (
          <li key={item.link}>
            <a
              href={item.link}
              className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
              target="_blank"
              rel="noreferrer"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const helpfulChannels = [
  {
    name: "Billt.",
    link: "https://www.youtube.com/@Billt_it",
  },
  {
    name: "Maker Mike",
    link: "https://www.youtube.com/@MakerMike54",
  },
  {
    name: "Scott Yu-Jang",
    link: "https://www.youtube.com/@ScottYuJan",
  }
]

const enclosures = [
  {
    name: "YOOPAI Resin",
    link: "https://www.amazon.ca/sspa/click?ie=UTF8&spc=MTo2MTcwNzYxNTE5MzQ0MzA1OjE3NTU4MTY4NDk6c3BfYXRmOjMwMDg3MDA3MDQxODkwMjo6MDo6&url=%2FLarge-Resin-Enclosure-Ventilation-Compatible%2Fdp%2FB0DSKDXSL5%2Fref%3Dsr_1_2_sspa%3Fcrid%3D3HTH9JW6J9MHO%26dib%3DeyJ2IjoiMSJ9.C41hRqlV5x5CYDH5Q7XXluSGbffte41j9pWE7Vm3JuLVZIaFWoEe2rGeRuyaQ8DqJCt3IJdFLi7ydYkB6NAg0kax5iYrFNBsDUxaz6hHUft1_zeun6VK4vXBoyR4YP4a9zNHTv9U7ABCoAqL18ZIk2C2l7pvM1pK4SwM5Q1pnP2aiekKMZa7Y17XxiYr4iWw9hbp2dWmEYyviOvdx08o0KhvkvOAul5qED8_xPFiX9j12ag-46AdUQxX8V5J3tetLtmzVx_YjKaivsWaoQ95ky5e3QAAEnfNw358PmMzlrw.uCkmVC_3SAfCfT0LSpTUg3SGHLLClAzVdSKEabX1ZEc%26dib_tag%3Dse%26keywords%3D3d%2Benclosure%26qid%3D1755816849%26sprefix%3D3d%2Benclosur%252Caps%252C107%26sr%3D8-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
  },
  {
    name: "YOOPAI FDM",
    link: "https://www.amazon.ca/Enclosures-Fireproof-Temperature-Protective-Printer%EF%BC%8825-6/dp/B0BMLD17QF/ref=sr_1_5?sr=8-5",
  },
  {
    name: "A1 Enclosure",
    link: "https://www.amazon.ca/sspa/click?ie=UTF8&spc=MToyNzgyNTY2MTAyMjUxNDk4OjE3NTU4MTY4NDk6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDc4Njk0NTI4NzcwMjo6NDo6&url=%2FEnclosure-Stainless-Fireproof-Dustproof-Temperature%2Fdp%2FB0DRY5VCHZ%2Fref%3Dsxin_15_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.a0ad33d0-ba28-48c7-9aa0-231fb1fad82a%253Aamzn1.sym.a0ad33d0-ba28-48c7-9aa0-231fb1fad82a%26crid%3D3HTH9JW6J9MHO%26cv_ct_cx%3D3d%2Benclosure%26keywords%3D3d%2Benclosure%26pd_rd_i%3DB0DRY5VCHZ%26pd_rd_r%3D2a2425b2-a6c2-4085-b556-79288798514a%26pd_rd_w%3D6WBwm%26pd_rd_wg%3DZW3HI%26pf_rd_p%3Da0ad33d0-ba28-48c7-9aa0-231fb1fad82a%26pf_rd_r%3D5Y20XBGZ783N1H6JMMFY%26qid%3D1755816849%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sprefix%3D3d%2Benclosur%252Caps%252C107%26sr%3D1-5-30a71431-0640-4d25-b8df-74e773a218a5-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1",
  }
]

const printers = [
  {
    name: "Bambu Labs",
    link: "https://bambulab.com/en-ca",
  },
  {
    name: "Creality",
    link: "https://www.creality.com/products/creality-hi-combo?gad_campaignid=22669193684"
  },
  {
    name: "Prusa Research",
    link: "https://www.prusa3d.com/?gad_campaignid=804628075"
  }
]

const mySetup = [
  {
    name: "Bambu Lab A1 Mini",
    link: "https://bambulab.com/en-ca/a1-mini",
  },
  {
    name: "Creality Exhaust Kit",
    link: "https://www.amazon.ca/dp/B0CLYB1ZVZ",
  },
  {
    name: "YOOPAI Enclosure",
    link: "https://www.amazon.ca/Enclosures-Fireproof-Temperature-Protective-Printer%EF%BC%8825-6/dp/B0BMLD17QF/ref=sr_1_9?s=industrial&sr=1-9",
  },
]

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2">
          <div className="border-b border-gray-100 py-8 lg:order-last lg:border-s lg:border-b-0 lg:py-16 lg:ps-16 dark:border-gray-800">
            <div className="mt-8 space-y-4 lg:mt-0">
              <span className="hidden h-1 w-10 rounded-sm bg-blue-500 lg:block"></span>

              <div>
                <h2
                  className="text-2xl font-medium text-gray-900 dark:text-white"
                  id="contact"
                >
                  Contact Me
                </h2>

                <p className="mt-4 max-w-lg text-gray-500 dark:text-gray-400">
                  If I'm mistaken somewhere or you'd like to contribute to the
                  website, feel free to send a note to me so I'll add and credit
                  you here!
                </p>
              </div>

              <div>
                <label htmlFor="Notes">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {" "}
                    Notes{" "}
                  </span>

                  <textarea
                    id="Notes"
                    className="mt-0.5 w-full resize-none text-white rounded border-1 border-white shadow-sm sm:text-sm  dark:text-white p-1"
                    rows={4}
                    defaultValue={"This feature is still a W.I.P."}
                  ></textarea>
                </label>

                <div className="mt-1.5 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    className="rounded border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
                  >
                    Clear
                  </button>

                  <button
                    type="button"
                    className="rounded border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="py-8 lg:py-16 lg:pe-16">
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <Sources title="Helpful Channels" links={helpfulChannels} />

              {/* <Sources title="Enclosures" links={enclosures} /> */}

              <Sources title="Printers" links={printers} />

              <Sources title="My Setup" links={mySetup} />

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
