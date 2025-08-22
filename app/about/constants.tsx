export const CONSTANTS = {
  HOME: `Welcome to my unofficial guide to 3D printing! I recently got my own 3D printer and thought I'd write about my experience so far, along with a short guide for the newcomers.`,

  DISCLAIMER: `I am NOT an expert in 3D printing, nor am I an industrial or occupational hygienist. This guide is based on my own experiences and research, and I am NOT responsible for any injury or damage that may occur from following it. Please do your own research and take proper safety precautions when working with 3D printers and related equipment.`,

  YAPPING: `I'm just going to yap a bit about how I got into 3D printing, what I've enjoyed so far, and what I plan to do next.

  I think what really pulled me into the hobby was my habit of looking at things and thinking: I could probably fix that. I wonder if I could make this better. How cool would it be if I could make that? But if you had asked me a few years ago what I knew about 3D printers, then all I could tell you was that it looked cool and that Creality had some crazy printers. Although I've just recently picked up this hobby, I've been loving every bit of it. There's always so much to learn, but I guess that's to be expected when you pick up two hobbies at once (3D printing and modeling). There's something about being able to create, recreate, or just admire other models/prints that really makes you appreciate all the thought and effort that go into them.

  What really pushed me to finally get a printer, though, were videos from Scott Yu-Jan and Billt. The idea of innovating at that level—solving problems you didn't even know existed and then turning those solutions into a business—really lit a fire in me. At this point, I honestly think every household should have a printer, lol.

  I don't have an exact timeline for what I want to do next, but my plan is to get better at 3D modeling, post some of my own designs, and eventually upgrade my printer. Seeing all the new models and sales makes it REALLY hard to resist upgrading right away, but hopefully I can hold out for another year, haha. That's all for my yap session—enjoy the rest of this (unofficial) guide!`,

  PRINTERS: `There are two main types of 3D printers you can choose from:

  1. FDM (Fused Deposition Modeling)  
  2. SLA (Stereolithography)  

  FDM printers melt plastic filament such as PLA, ABS, or PETG into layers to build a 3D object. SLA printers, on the other hand, use a laser to cure liquid resin (basically liquid plastic) into solid shapes. FDM printers are generally cheaper and easier to use, while SLA printers can produce higher-quality prints but are more expensive and require more maintenance. Since there are so many brands and models available, it's important to do your research and pick one that fits your needs and budget.

  If you want to learn how 3D printers work and enjoy tinkering, I'd recommend starting with a Creality printer. But if you just want something that works right out of the box, then the Bambu Lab A1 series is a great choice. Personally, I went with the Bambu Lab A1 Mini.`,

  FILAMENTS: {
    TYPES: `If you go with an FDM printer, you'll need filament to print with. The most common (and safest) option for beginners is PLA (Polylactic Acid). It's biodegradable and one of the least toxic filaments available.  

    Other popular filaments include:  
    1. ABS (Acrylonitrile Butadiene Styrene)  
    2. PETG (Polyethylene Terephthalate Glycol)  
    3. ASA (Acrylonitrile Styrene Acrylate)  
    4. TPU (Thermoplastic Polyurethane)  
    5. Nylon  

    Each material has its own properties and best use cases, so it's important to do your research and find one that fits your needs. Here's a quick rundown: PLA is great for beginners and general printing. ABS is more durable and heat-resistant, but emits very harmful fumes. PETG is a good middle ground between PLA and ABS. ASA is basically a stronger, weatherproof version of ABS. Nylon is an even stronger and more flexible version of ASA, but is also harder to print with. Lastly, TPU is a flexible, rubber-like filament, making it perfect for parts that need to bend, stretch, or take a beating without breaking.  

    On top of that, many of these filaments come in different variations, like PLA+, PLA-CF, PETG+, or PETG-HF. Each subtype generally serves different purposes, so make sure you do your own research to find which one best fits your needs.`,

    DRYING: `Depending on the type of filament you use, you might need to dry it before printing. Some filaments are more prone to absorbing moisture, which can lead to messy prints or even the dreaded blob of death.  

    The easiest way to keep filament dry is to store it in plastic cereal containers with microwavable silica packets. Another alternative, but more expensive option is to use dedicated units like Creality's Dryer Box or Bambu Lab's AMS Pro 2, which can store and dry your filaments.`,

    MULTICOLOR: `Some printers, like the Prusa XL or Bambu series, give you the option to print with multiple filament colors. Of course, the added benefits make it more expensive, and in many cases you won't need it—especially if you plan on sanding or painting your prints anyway.  

    The best way to decide if multicolor printing is worth it or not is to go onto Printables, Thingiverse, or Makerworld and favorite the models you'd actually want to print. If most of them don't use multiple colors, then you can probably skip the add-on. If they do, then go for it!`,

    DESCRIPTION: `I went with PLA because I didn't want to risk breathing in any harmful fumes and I wanted to keep things simple as a beginner. There are different types of PLA filament: Basic, Matte, Tough, Wood, and more. I bought my first roll of filament from Bambu Lab and it was great. No complaints other than the ~$40 shipping fees. After that, I switched to PLA Matte and PLA+ from Elegoo on Amazon, and those have been great as well. I do want to try TPU in the future, but I think I still need to sort out my ventilation setup first.`,
  },
  SAFETY: {
    VENTILATION: `Ventilation involves using a fan or exhaust system to remove the fumes and particles from the air and vent them outside. Ideally, you should be printing in a well-ventilated area or even outside if possible. If this is not an option for you, then you can use a filtration system to remove as many of the harmful particles and fumes as possible.`,
    FILTRATION: `This should be your LAST option if you want to 3D print. Filtering is more expensive to setup and maintain. If you live in a windowless shoebox or a maximum security prison, you can buy an Air Purifier to remove any of the UFTs and VoCs that come out of the printing process before pushing air back into the room. Look for purifiers with HEPA and Carbon Filters. Honestly, I'm not even sure how effective this is, so I would not recommend it.`,
    DESCRIPTION: `When it comes to 3D printing, there's two main ways to deal with the fumes and particles that are emitted during the process: ventilation and/or filtration. If you plan on getting into the hobby, then I would recommend splitting your budget between a good printer and a really good ventilation/filtration system. I would even argue that if you can't vent or filter anything out, then you shouldn't be printing at all until you can. But if you're doing it anyway, then may God be with you.`,

    ENCLOSURE: `Some printers like the Bambu X1C and P1S already come with enclosures, but if you're buying a Creality Ender 3 Pro or Bambu A1 series printer, then you might want to buy one. Enclosures keep dust off your printers, maintain stable ambient temperatures to prevent wraping, and protects your house from any potential fires (extremely rare). 
    
    Depending on your printer, having an enclosure might fry your motherboard if it doesn't have its own onboard fan, in which case, there are a ton of easy mods to fix this. I don't have an A1, so I can't comment on how to fix this. Make sure you do your own research and find out what's best for your setup.`,

    FANS: `Depending on how you're going to vent or filter out the nasties from your 3D printer, you're either going to need a meth-lab level exhaust fan or simple computer one. If you have a short duct venting outside or a thin filter, then you can use a simple computer fan like the Noctua A8 or IPPC-3000 for your enclosure. But if you're using more heavy-duty filaments like ABS and Nylon, or resin printing, then you should go all out and get an inline-duct exhaust fan. Make sure to consider the fan speeds and pressure when you're buying a fan for your enclosure and filters. You can't just slap a random fan onto a random filter—make sure they actually match up.  
    
    - Higher fan speed = less time needed to vent or filter
    - Higher fan pressure = more force to push the air through filters`,
  },
  FINALE: `You've got your printer, got your filaments, and setup your enclosure. You're finally ready to get into the fun part, printing (and maybe modeling)! Honestly, I don't have much of an opinion or guide here, use whatever software works for you! Personally, I've been using Fusion360 to model everything, but I've heard that onShape is a good alternative as well.`,

  PROBLEMS: {
    WIP: `I wanted to make a section for common problems like the blob of death, poor bed adhesion, and more. Luckily, I haven't run into any of these issues… yet. But if I do, I'll post some solutions here as well.`
  }
}
