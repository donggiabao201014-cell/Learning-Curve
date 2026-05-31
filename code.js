const elementsData = [
    // Period 1
    {n: 1, s: "H", name: "Hydrogen", w: "1.008", c: "reactive-nonmetal", r: 1, g: 1, state: "Gas", disc: "H. Cavendish", desc: "The lightest, simplest, and most abundant chemical element in the universe. Highly flammable as a diatomic gas."},
    {n: 2, s: "He", name: "Helium", w: "4.0026", c: "noble-gas", r: 1, g: 18, state: "Gas", disc: "Janssen & Lockyer", desc: "A colorless, odorless, completely unreactive noble gas. It is the second most common element found throughout space."},
    
    // Period 2
    {n: 3, s: "Li", name: "Lithium", w: "6.94", c: "alkali-metal", r: 2, g: 1, state: "Solid", disc: "J.A. Arfwedson", desc: "An exceptionally soft, silvery alkali metal. It holds the lowest density of any solid element and is key to modern battery technologies."},
    {n: 4, s: "Be", name: "Beryllium", w: "9.0122", c: "alkaline-earth", r: 2, g: 2, state: "Solid", disc: "L.N. Vauquelin", desc: "A strong, lightweight alkaline-earth metal with a high melting point. Used widely in aerospace engineering and X-ray windows."},
    {n: 5, s: "B", name: "Boron", w: "10.81", c: "metalloid", r: 2, g: 13, state: "Solid", disc: "Gay-Lussac & Thénard", desc: "A metalloid element commonly utilized in borosilicate glass formulations, industrial ceramics, and agricultural nutrients."},
    {n: 6, s: "C", name: "Carbon", w: "12.011", c: "reactive-nonmetal", r: 2, g: 14, state: "Solid", disc: "Ancient Egypt", desc: "The foundational tetrahedral chemical block that forms the basis of all organic chemistry and complex organic life forms on Earth."},
    {n: 7, s: "N", name: "Nitrogen", w: "14.007", c: "reactive-nonmetal", r: 2, g: 15, state: "Gas", disc: "D. Rutherford", desc: "A standard diatomic gas that comprises roughly 78% of Earth's atmosphere. Crucial component for life proteins."},
    {n: 8, s: "O", name: "Oxygen", w: "15.999", c: "reactive-nonmetal", r: 2, g: 16, state: "Gas", disc: "J. Priestley", desc: "An aggressively reactive nonmetal oxidizer that fuels respiration cycles in animals and plays a massive role in combustion reactions."},
    {n: 9, s: "F", name: "Fluorine", w: "18.998", c: "reactive-nonmetal", r: 2, g: 17, state: "Gas", disc: "H. Moissan", desc: "The most electronegative and reactive element in existence. Corrosive enough to trigger spontaneous ignition in many materials."},
    {n: 10, s: "Ne", name: "Neon", w: "20.180", c: "noble-gas", r: 2, g: 18, state: "Gas", disc: "Ramsay & Travers", desc: "An inert gas that shines with an iconic intense reddish-orange hue when excited inside vacuum electrical display systems."},
    
    // Period 3
    {n: 11, s: "Na", name: "Sodium", w: "22.990", c: "alkali-metal", r: 3, g: 1, state: "Solid", disc: "H. Davy", desc: "A soft, highly reactive alkali metal. Combusts violently when brought into contact with liquid water or high ambient moisture."},
    {n: 12, s: "Mg", name: "Magnesium", w: "24.305", c: "alkaline-earth", r: 3, g: 2, state: "Solid", disc: "J. Black", desc: "A structurally durable structural alkaline-earth metal. Ignites with a blindingly white light when heated in open air."},
    {n: 13, s: "Al", name: "Aluminium", w: "26.982", c: "post-transition", r: 3, g: 13, state: "Solid", disc: "H.C. Ørsted", desc: "A lightweight, non-magnetic, corrosion-resistant post-transition metal widely implemented across packaging and transit networks."},
    {n: 14, s: "Si", name: "Silicon", w: "28.085", c: "metalloid", r: 3, g: 14, state: "Solid", disc: "J.J. Berzelius", desc: "A crystalline metalloid element serving as the core semiconducting framework for computer chips, solar grids, and glass manufacturing."},
    {n: 15, s: "P", name: "Phosphorus", w: "30.974", c: "reactive-nonmetal", r: 3, g: 15, state: "Solid", disc: "H. Brand", desc: "A highly reactive nonmetal existing in multiple elemental forms (allotropes), including flammable white and red phosphorus."},
    {n: 16, s: "S", name: "Sulfur", w: "32.06", c: "reactive-nonmetal", r: 3, g: 16, state: "Solid", disc: "Ancient China", desc: "An abundant, bright yellow nonmetal crystalline solid that forms sulfuric acid when processed, widely used in gunpowder and vulcanized rubber."},
    {n: 17, s: "Cl", name: "Chlorine", w: "35.45", c: "reactive-nonmetal", r: 3, g: 17, state: "Gas", disc: "C.W. Scheele", desc: "A dense, toxic, greenish-yellow halogen gas frequently utilized for water sanitation, industrial bleaching, and chemical synthesis."},
    {n: 18, s: "Ar", name: "Argon", w: "39.948", c: "noble-gas", r: 3, g: 18, state: "Gas", disc: "Rayleigh & Ramsay", desc: "The third most abundant gas in Earth's atmosphere. Extensively implemented as an unreactive shield gas during metallurgy and welding."},

    // Period 4
    {n: 19, s: "K", name: "Potassium", w: "39.098", c: "alkali-metal", r: 4, g: 1, state: "Solid", disc: "H. Davy", desc: "A silvery alkali metal soft enough to be sliced cleanly with a standard knife. Oxidizes rapidly on contact with open air atmospheres."},
    {n: 20, s: "Ca", name: "Calcium", w: "40.078", c: "alkaline-earth", r: 4, g: 2, state: "Solid", disc: "H. Davy", desc: "An essential alkaline-earth metal component within geological structures and fundamental biological cellular support architecture like teeth and bones."},
    {n: 21, s: "Sc", name: "Scandium", w: "44.956", c: "transition-metal", r: 4, g: 3, state: "Solid", disc: "L.F. Nilson", desc: "A rare-earth transition metal historically integrated into lightweight high-performance aluminum framing materials and sports equipment."},
    {n: 22, s: "Ti", name: "Titanium", w: "47.867", c: "transition-metal", r: 4, g: 4, state: "Solid", disc: "W. Gregor", desc: "A lustrous, low-density transition metal exhibiting incredible structural tensile strength and unrivaled natural resistance to seawater corrosion."},
    {n: 23, s: "V", name: "Vanadium", w: "50.942", c: "transition-metal", r: 4, g: 5, state: "Solid", disc: "A.M. del Río", desc: "A hard, silver-grey structural transition metal added to steel production runs to construct high-strength armor plating and industrial tools."},
    {n: 24, s: "Cr", name: "Chromium", w: "51.996", c: "transition-metal", r: 4, g: 6, state: "Solid", disc: "L.N. Vauquelin", desc: "A steel-gray, lustrous transition metal famous for receiving a high specular polish. The central component in anti-corrosive stainless steel."},
    {n: 25, s: "Mn", name: "Manganese", w: "54.938", c: "transition-metal", r: 4, g: 7, state: "Solid", disc: "J.G. Gahn", desc: "An industrial transition metal critical for processing raw iron alloys into steel by binding sulfur particles and improving hardness parameters."},
    {n: 26, s: "Fe", name: "Iron", w: "55.845", c: "transition-metal", r: 4, g: 8, state: "Solid", disc: "Before 5000 BC", desc: "The single most abundant chemical element configuration forming the physical mass of planet Earth's overall core structures."},
    {n: 27, s: "Co", name: "Cobalt", w: "58.933", c: "transition-metal", r: 4, g: 9, state: "Solid", disc: "G. Brandt", desc: "A ferromagnetic metal mined primarily to manufacture high-density superalloys and lithium-ion battery cathodes."},
    {n: 28, s: "Ni", name: "Nickel", w: "58.693", c: "transition-metal", r: 4, g: 10, state: "Solid", disc: "A.F. Cronstedt", desc: "A silvery-white metal with a subtle golden tinge. Widely leveraged in coins, chemical catalysts, and anti-rust plating layers."},
    {n: 29, s: "Cu", name: "Copper", w: "63.546", c: "transition-metal", r: 4, g: 11, state: "Solid", disc: "Middle East", desc: "A highly ductile metal possessing superior electrical and thermal conductivity paths. Rapidly forms a green patina layer when exposed to moist environments."},
    {n: 30, s: "Zn", name: "Zinc", w: "65.38", c: "transition-metal", r: 4, g: 12, state: "Solid", disc: "Indian Chemists", desc: "A bluish-grey metal commonly layered over structural steel nodes in a process called galvanization to stop ambient rusting."},
    {n: 31, s: "Ga", name: "Gallium", w: "69.723", c: "post-transition", r: 4, g: 13, state: "Solid", disc: "Lecoq de Boisbaudran", desc: "An unconventional metal that liquefies completely when held in a human hand due to its uniquely low melting point of 29.76 degrees Celsius."},
    {n: 32, s: "Ge", name: "Germanium", w: "72.630", c: "metalloid", r: 4, g: 14, state: "Solid", disc: "C.A. Winkler", desc: "A hard, grey-white metalloid acting as an indispensable asset in modern fiber-optic communications systems and infrared imaging lenses."},
    {n: 33, s: "As", name: "Arsenic", w: "74.922", c: "metalloid", r: 4, g: 15, state: "Solid", disc: "Albertus Magnus", desc: "A notoriously toxic metalloid element. Used primarily in semiconductor doping profiles and specialty metallurgical strengthening applications."},
    {n: 34, s: "Se", name: "Selenium", w: "78.971", c: "reactive-nonmetal", r: 4, g: 16, state: "Solid", disc: "J.J. Berzelius", desc: "A nonmetal with distinct photoconductive electrical features. Widely configured into light meters, photocells, and specialized glass coloring adjustments."},
    {n: 35, s: "Br", name: "Bromine", w: "79.904", c: "reactive-nonmetal", r: 4, g: 17, state: "Liquid", disc: "Balard & Gmelin", desc: "The only nonmetallic element that exists as a volatile, deep reddish-brown liquid at room temperature. Gives off a suffocating, harsh vapor."},
    {n: 36, s: "Kr", name: "Krypton", w: "83.798", c: "noble-gas", r: 4, g: 18, state: "Gas", disc: "Ramsay & Travers", desc: "A heavy noble gas tracked inside specialized airport runway signals, high-efficiency incandescent lightbulbs, and precision gas lasers."},

    // Period 5
    {n: 37, s: "Rb", name: "Rubidium", w: "85.468", c: "alkali-metal", r: 5, g: 1, state: "Solid", disc: "Bunsen & Kirchhoff", desc: "An highly unstable, liquid-soft alkali metal that bursts into flames spontaneously upon exposure to open air systems."},
    {n: 38, s: "Sr", name: "Strontium", w: "87.62", c: "alkaline-earth", r: 5, g: 2, state: "Solid", disc: "A. Crawford", desc: "A chemically volatile alkaline-earth metal element heavily integrated into fireworks manufacturing to generate vivid crimson red explosions."},
    {n: 39, s: "Y", name: "Yttrium", w: "88.906", c: "transition-metal", r: 5, g: 3, state: "Solid", disc: "J. Gadolin", desc: "A silvery-transition metal utilized to produce phosphor components in radar display modules, LEDs, and high-temperature superconductors."},
    {n: 40, s: "Zr", name: "Zirconium", w: "91.224", c: "transition-metal", r: 5, g: 4, state: "Solid", disc: "M.H. Klaproth", desc: "A lustrous metal with extremely low neutron absorption cross-sections. Highly favored for lining nuclear reactor fuel rod assemblies."},
    {n: 41, s: "Nb", name: "Niobium", w: "92.906", c: "transition-metal", r: 5, g: 5, state: "Solid", disc: "C. Hatchett", desc: "A light grey superconducting transition metal critical for forging the high-strength magnets inside medical MRI scanner arrays."},
    {n: 42, s: "Mo", name: "Molybdenum", w: "95.95", c: "transition-metal", r: 5, g: 6, state: "Solid", disc: "C.W. Scheele", desc: "An incredibly high-melting point metal alloyed into high-strength steel variables to prevent structural weakening at intense operational heats."},
    {n: 43, s: "Tc", name: "Technetium", w: "98", c: "transition-metal", r: 5, g: 7, state: "Synthetic", disc: "Perrier & Segrè", desc: "The lowest atomic number element that has no stable isotopes. Highly radioactive, synthetic asset extensively deployed in medical scanning diagnostic procedures."},
    {n: 44, s: "Ru", name: "Ruthenium", w: "101.07", c: "transition-metal", r: 5, g: 8, state: "Solid", disc: "K.K. Klaus", desc: "A rare platinum-group transition metal added to electrical nodes to boost wear endurance and resistance to spark erosion."},
    {n: 45, s: "Rh", name: "Rhodium", w: "102.91", c: "transition-metal", r: 5, g: 9, state: "Solid", disc: "W.H. Wollaston", desc: "An exceedingly rare and valuable precious metal used globally to finish high-end automotive catalytic converters and reflective mirrors."},
    {n: 46, s: "Pd", name: "Palladium", w: "106.42", c: "transition-metal", r: 5, g: 10, state: "Solid", disc: "W.H. Wollaston", desc: "A platinum-group metal valued for its unique capacity to absorb up to 900 times its own physical volume in pure hydrogen gas."},
    {n: 47, s: "Ag", name: "Silver", w: "107.87", c: "transition-metal", r: 5, g: 11, state: "Solid", disc: "Prehistoric", desc: "A brilliant precious metal possessing the single highest electrical conductivity, thermal conductivity, and optical reflectivity metrics of any element."},
    {n: 48, s: "Cd", name: "Cadmium", w: "112.41", c: "transition-metal", r: 5, g: 12, state: "Solid", disc: "Stromeyer & Hermann", desc: "A soft toxic transition metal historical used in pigment paint configurations, anti-friction electroplating, and plastic stabilizer chains."},
    {n: 49, s: "In", name: "Indium", w: "114.82", c: "post-transition", r: 5, g: 13, state: "Solid", disc: "Reich & Richter", desc: "A highly pliable post-transition metal element configured into indium-tin-oxide coatings to manufacture smartphone touchscreen glass layers."},
    {n: 50, s: "Sn", name: "Tin", w: "118.71", c: "post-transition", r: 5, g: 14, state: "Solid", disc: "Prehistoric", desc: "A silvery metal widely configured into food packaging can barriers, plumbing solder points, and structural bronze metal alloy compounds."},
    {n: 51, s: "Sb", name: "Antimony", w: "121.76", c: "metalloid", r: 5, g: 15, state: "Solid", disc: "Prehistoric", desc: "A brittle, shiny metalloid combined with lead variables to harden lead-acid automobile batteries and create effective flame-retardant industrial mixtures."},
    {n: 52, s: "Te", name: "Tellurium", w: "127.60", c: "metalloid", r: 5, g: 16, state: "Solid", disc: "von Reichenstein", desc: "A rare, mild metalloid element sourced primarily to act as a crucial compound inside advanced solar panel energy collection grids."},
    {n: 53, s: "I", name: "Iodine", w: "126.90", c: "reactive-nonmetal", r: 5, g: 17, state: "Solid", disc: "B. Courtois", desc: "A lustrous, deep purple halogen nonmetal solid that sublimates easily into a violet gas. Essential nutrient tracking node for thyroid health."},
    {n: 54, s: "Xe", name: "Xenon", w: "131.29", c: "noble-gas", r: 5, g: 18, state: "Gas", disc: "Ramsay & Travers", desc: "An heavy noble gas producing an intense, high-powered white arc light utilized inside specialized camera flashes and projection equipment."},

    // Period 6
    {n: 55, s: "Cs", name: "Caesium", w: "132.91", c: "alkali-metal", r: 6, g: 1, state: "Solid", disc: "Bunsen & Kirchhoff", desc: "An extremely reactive alkali metal with a near room-temp melting point. The radioactive vibrations of its atoms define the global standard for one single second of time."},
    {n: 56, s: "Ba", name: "Barium", w: "137.33", c: "alkaline-earth", r: 6, g: 2, state: "Solid", disc: "C.W. Scheele", desc: "A reactive alkaline-earth metal compound leveraged inside medical gastrointestinal imaging cocktails and specialized green firework sparks."},
    
    // Lanthanides Visual Breakout Block (Mapped to row 8)
    {n: 57, s: "La", name: "Lanthanum", w: "138.91", c: "lanthanide", r: 8, g: 3, state: "Solid", disc: "C.G. Mosander", desc: "The prototype element initiating the lanthanide cluster. Sourced to formulate high-refractive glass for studio camera lenses."},
    {n: 58, s: "Ce", name: "Cerium", w: "140.12", c: "lanthanide", r: 8, g: 4, state: "Solid", disc: "Berzelius & Hisinger", desc: "An abundant rare-earth lanthanide metal capable of sparking vigorously when scraped. Formulates the active flint rods inside lighters."},
    {n: 59, s: "Pr", name: "Praseodymium", w: "140.91", c: "lanthanide", r: 8, g: 5, state: "Solid", disc: "C.A. von Welsbach", desc: "A soft, magnetic rare-earth metal incorporated into specialized yellow protective goggles for glassblowers and arc welders."},
    {n: 60, s: "Nd", name: "Neodymium", w: "144.24", c: "lanthanide", r: 8, g: 6, state: "Solid", disc: "C.A. von Welsbach", desc: "A powerful lanthanide element mixed with iron and boron to create the strongest commercially available permanent magnets on earth."},
    {n: 61, s: "Pm", name: "Promethium", w: "145", c: "lanthanide", r: 8, g: 7, state: "Synthetic", disc: "Marinsky & Glendenin", desc: "An entirely radioactive, synthetic lanthanide isotope tracking node utilized inside miniature atomic battery devices and thickness gauges."},
    {n: 62, s: "Sm", name: "Samarium", w: "150.36", c: "lanthanide", r: 8, g: 8, state: "Solid", disc: "Lecoq de Boisbaudran", desc: "A rare-earth element alloyed into high-temperature permanent magnets configured into microwave applications and aerospace electronic nodes."},
    {n: 63, s: "Eu", name: "Europium", w: "151.96", c: "lanthanide", r: 8, g: 9, state: "Solid", disc: "E.A. Demarçay", desc: "The most chemically reactive lanthanide element, widely processed to yield the red phosphors layered inside video monitors and TV screens."},
    {n: 64, s: "Gd", name: "Gadolinium", w: "157.25", c: "lanthanide", r: 8, g: 10, state: "Solid", disc: "de Marignac", desc: "A unique rare-earth element processed down to act as an intravenous contrast agent tracking medium during medical MRI diagnostic scans."},
    {n: 65, s: "Tb", name: "Terbium", w: "158.93", c: "lanthanide", r: 8, g: 11, state: "Solid", disc: "C.G. Mosander", desc: "A malleable rare earth lanthanide element leveraged to produce green phosphors inside state-of-the-art flat-panel video monitors."},
    {n: 66, s: "Dy", name: "Dysprosium", w: "162.50", c: "lanthanide", r: 8, g: 12, state: "Solid", disc: "Lecoq de Boisbaudran", desc: "A rare earth metal tracking high magnetic susceptibility values, added to electric vehicle motor magnets to prevent demagnetization at heat."},
    {n: 67, s: "Ho", name: "Holmium", w: "164.93", c: "lanthanide", r: 8, g: 13, state: "Solid", disc: "Soret & Delafontaine", desc: "An element presenting among the highest natural magnetic strength profiles, configured inside solid-state surgical laser systems."},
    {n: 68, s: "Er", name: "Erbium", w: "167.26", c: "lanthanide", r: 8, g: 14, state: "Solid", disc: "C.G. Mosander", desc: "A silver-pink rare earth lanthanide metal alloy injected into fiber-optic network lines to amplify laser signal transmission speeds."},
    {n: 69, s: "Tm", name: "Thulium", w: "168.93", c: "lanthanide", r: 8, g: 15, state: "Solid", disc: "P.T. Cleve", desc: "One of the rarest and most expensive lanthanide metals. Used to introduce radioactive isotopes inside portable target X-ray field gear."},
    {n: 70, s: "Yb", name: "Ytterbium", w: "173.05", c: "lanthanide", r: 8, g: 16, state: "Solid", disc: "de Marignac", desc: "A bright silvery lanthanide metal configured to act as structural stress gauges inside deep industrial monitoring seismographs and structural blocks."},
    {n: 71, s: "Lu", name: "Lutetium", w: "174.97", c: "lanthanide", r: 8, g: 17, state: "Solid", disc: "Urbain & von Welsbach", desc: "The final, densest, and hardest element concluding the lanthanide layout. Sourced to calibrate specialized geological age metrics."},
    
    // Rest of Period 6
    {n: 72, s: "Hf", name: "Hafnium", w: "178.49", c: "transition-metal", r: 6, g: 4, state: "Solid", disc: "Coster & von Hevesy", desc: "A transition metal presenting excellent heat resistance and neutron absorption properties, making it an excellent anchor for nuclear control rods."},
    {n: 73, s: "Ta", name: "Tantalum", w: "180.95", c: "transition-metal", r: 6, g: 5, state: "Solid", disc: "A.G. Ekeberg", desc: "An exceptionally corrosion-resistant refractory transition metal heavily manufactured into sub-miniature capacitors for smartphones and computers."},
    {n: 74, s: "W", name: "Tungsten", w: "183.84", c: "transition-metal", r: 6, g: 6, state: "Solid", disc: "Elhuyar Brothers", desc: "A remarkably dense metal capturing the highest raw melting point of all discovered elemental structures (3,422 degrees Celsius)."},
    {n: 75, s: "Re", name: "Rhenium", w: "186.21", c: "transition-metal", r: 6, g: 7, state: "Solid", disc: "Noddack & Berg", desc: "One of the rarest transition elements in Earth's crust, added into advanced jet engine turbine alloys to endure immense pressure loads."},
    {n: 76, s: "Os", name: "Osmium", w: "190.23", c: "transition-metal", r: 6, g: 8, state: "Solid", disc: "S. Tennant", desc: "A brittle, bluish-white platinum group transition metal. It is officially documented as the single densest naturally occurring element on earth."},
    {n: 77, s: "Ir", name: "Iridium", w: "192.22", c: "transition-metal", r: 6, g: 9, state: "Solid", disc: "S. Tennant", desc: "The most corrosion-resistant transition metal known. An extremely dense, rare asset found concentrated heavily in deep asteroid crash structures."},
    {n: 78, s: "Pt", name: "Platinum", w: "195.08", c: "transition-metal", r: 6, g: 10, state: "Solid", disc: "A. de Ulloa", desc: "An exceptionally rare, highly unreactive, and valuable precious transition metal favored for fine jewelry and automotive emission controls."},
    {n: 79, s: "Au", name: "Gold", w: "196.97", c: "transition-metal", r: 6, g: 11, state: "Solid", disc: "Prehistoric", desc: "A highly sought-after yellow precious metal valued since antiquity for coinage, jewelry art, and highly reliable anti-oxidization electronic connection contacts."},
    {n: 80, s: "Hg", name: "Mercury", w: "200.59", c: "transition-metal", r: 6, g: 12, state: "Liquid", disc: "Ancient Egypt", desc: "The only metallic transition element that maintains a fluid liquid state under normal room temperature balances. Highly toxic system hazard."},
    {n: 81, s: "Tl", name: "Thallium", w: "204.38", c: "post-transition", r: 6, g: 13, state: "Solid", disc: "W. Crookes", desc: "A soft, gray post-transition metal that is extremely toxic. Historically prepared into rodenticides and specialty infrared optic targets."},
    {n: 82, s: "Pb", name: "Lead", w: "207.2", c: "post-transition", r: 6, g: 14, state: "Solid", disc: "Ancient Egypt", desc: "A heavy, dense, easily workable post-transition metal element historically engineered into piping networks, now confined to radiation shields and batteries."},
    {n: 83, s: "Bi", name: "Bismuth", w: "208.98", c: "post-transition", r: 6, g: 15, state: "Solid", disc: "C.F. Geoffroy", desc: "A brittle metal tracking an uniquely low toxicity relative to its heavy neighbors. Famous for growing colorful, step-like geometric crystal scales."},
    {n: 84, s: "Po", name: "Polonium", w: "209", c: "metalloid", r: 6, g: 16, state: "Solid", disc: "Marie Curie", desc: "An extremely rare, highly dangerous radioactive metalloid discovered by Marie Curie, emitting lethal alpha particle heat waves."},
    {n: 85, s: "At", name: "Astatine", w: "210", c: "metalloid", r: 6, g: 17, state: "Solid", disc: "Dale R. Corson", desc: "The rarest naturally occurring element on Earth's crust. Highly unstable radioactive structure decaying almost instantly into secondary particles."},
    {n: 86, s: "Rn", name: "Radon", w: "222", c: "noble-gas", r: 6, g: 18, state: "Gas", disc: "F.E. Dorn", desc: "A heavy, radioactive noble gas that can accumulate dangerously inside deep residential basements through natural uranium ground decay loops."},

    // Period 7
    {n: 87, s: "Fr", name: "Francium", w: "223", c: "alkali-metal", r: 7, g: 1, state: "Solid", disc: "M. Perey", desc: "An immensely unstable, highly radioactive alkali metal. Sinks into rapid isotopic breakdown with a fleeting half-life of only 22 minutes."},
    {n: 88, s: "Ra", name: "Radium", w: "226", c: "alkaline-earth", r: 7, g: 2, state: "Solid", disc: "Marie & Pierre Curie", desc: "An intensely radioactive alkaline-earth metal. Famously incorporated into vintage glow-in-the-dark watch dial paint recipes before its severe health hazards were understood."},
    
    // Actinides Visual Breakout Block (Mapped to row 9)
    {n: 89, s: "Ac", name: "Actinium", w: "227", c: "actinide", r: 9, g: 3, state: "Solid", disc: "A.L. Debierne", desc: "A highly active radioisotope initiating the actinide cluster. Glows with an eerie, pale blue light in dark settings."},
    {n: 90, s: "Th", name: "Thorium", w: "232.04", c: "actinide", r: 9, g: 4, state: "Solid", disc: "J.J. Berzelius", desc: "An abundant radioactive actinide metal targeted as an incredibly clean, safe nuclear fuel core option for generation plants."},
    {n: 91, s: "Pa", name: "Protactinium", w: "231.04", c: "actinide", r: 9, g: 5, state: "Solid", disc: "Fajans & Soddy", desc: "A dense, silvery-gray radioactive actinide metal formed natively inside natural raw uranium decay steps."},
    {n: 92, s: "U", name: "Uranium", w: "238.03", c: "actinide", r: 9, g: 6, state: "Solid", disc: "M.H. Klaproth", desc: "A dense, radioactive actinide element providing the essential energy fuel layout required to run commercial nuclear reactors and defense technology."},
    {n: 93, s: "Np", name: "Neptunium", w: "237", c: "actinide", r: 9, g: 7, state: "Synthetic", disc: "McMillan & Abelson", desc: "The first transuranic synthetic element constructed in a lab environment. Formformed as a byproduct within atomic reactor loops."},
    {n: 94, s: "Pu", name: "Plutonium", w: "244", c: "actinide", r: 9, g: 8, state: "Synthetic", disc: "G.T. Seaborg", desc: "An highly dangerous synthetic element generated inside nuclear processors. Highly potent fuel asset driving deep space exploration probe generators."},
    {n: 95, s: "Am", name: "Americium", w: "243", c: "actinide", r: 9, g: 9, state: "Synthetic", disc: "G.T. Seaborg", desc: "A synthetic element created via neutron bombardment. Found inside standard commercial ionization smoke detector models."},
    {n: 96, s: "Cm", name: "Curium", w: "247", c: "actinide", r: 9, g: 10, state: "Synthetic", disc: "Seaborg & Ghiorso", desc: "A highly radioactive actinide metal named to honor pioneer scientists Marie and Pierre Curie, engineered for alpha particle spectrometer designs."},
    {n: 97, s: "Bk", name: "Berkelium", w: "247", c: "actinide", r: 9, g: 11, state: "Synthetic", disc: "Thompson & Seaborg", desc: "A synthetic transuranic element developed at UC Berkeley, manufactured exclusively in microscopic quantities to advance nuclear research."},
    {n: 98, s: "Cf", name: "Californium", w: "251", c: "actinide", r: 9, g: 12, state: "Synthetic", disc: "Thompson & Ghiorso", desc: "A high neutron-emitting actinide element constructed to initiate atomic power plants and scan deep structural metal welds."},
    {n: 99, s: "Es", name: "Einsteinium", w: "252", c: "actinide", r: 9, g: 13, state: "Synthetic", disc: "Albert Ghiorso", desc: "Discovered unexpectedly inside the debris collection after the first thermonuclear explosion in 1952. Highly radioactive."},
    {n: 100, s: "Fm", name: "Fermium", w: "257", c: "actinide", r: 9, g: 14, state: "Synthetic", disc: "Albert Ghiorso", desc: "A highly radioactive heavy element generated via heavy neutron irradiation channels, named to honor physicist Enrico Fermi."},
    {n: 101, s: "Md", name: "Mendelevium", w: "258", c: "actinide", r: 9, g: 15, state: "Synthetic", disc: "Albert Ghiorso", desc: "A synthetic actinide named to honor Dmitri Mendeleev, the father who constructed the original historical periodic organization system framework."},
    {n: 102, s: "No", name: "Nobelium", w: "259", c: "actinide", r: 9, g: 16, state: "Synthetic", disc: "FLNR Dubna", desc: "A radioactive chemical asset generated in particle accelerators via cyclotron impacts, named after Alfred Nobel."},
    {n: 103, s: "Lr", name: "Lawrencium", w: "266", c: "actinide", r: 9, g: 17, state: "Synthetic", disc: "LBNL Berkeley", desc: "The final actinide element. A highly radioactive lab asset created from tracking californium bombardment paths."},
    
    // Rest of Period 7
    {n: 104, s: "Rf", name: "Rutherfordium", w: "267", c: "transition-metal", r: 7, g: 4, state: "Synthetic", disc: "JINR / LBNL", desc: "The initial transactinide element position. An incredibly unstable particle tracking a brief half-life measured in minutes."},
    {n: 105, s: "Db", name: "Dubnium", w: "268", c: "transition-metal", r: 7, g: 5, state: "Synthetic", disc: "JINR / LBNL", desc: "An highly radioactive synthetic metal created in specialized particle accelerators, named to recognize Dubna research groups in Russia."},
    {n: 106, s: "Sg", name: "Seaborgium", w: "269", c: "transition-metal", r: 7, g: 6, state: "Synthetic", disc: "LBNL Berkeley", desc: "A highly short-lived transuranic asset named to honor Glenn T. Seaborg while he was still actively alive."},
    {n: 107, s: "Bh", name: "Bohrium", w: "270", c: "transition-metal", r: 7, g: 7, state: "Synthetic", disc: "GSI Darmstadt", desc: "A transient synthetic element named after atomic structure pioneer Niels Bohr. Decays rapidly through alpha emissions."},
    {n: 108, s: "Hs", name: "Hassium", w: "271", c: "transition-metal", r: 7, g: 8, state: "Synthetic", disc: "GSI Darmstadt", desc: "A superheavy synthetic transition metal isotope path created via fusion bombardments of lead and iron nuclei."},
    {n: 109, s: "Mt", name: "Meitnerium", w: "278", c: "transition-metal", r: 7, g: 9, state: "Synthetic", disc: "GSI Darmstadt", desc: "A superheavy synthetic element named to honor physicist Lise Meitner, a co-discoverer of nuclear fission."},
    {n: 110, s: "Ds", name: "Darmstadtium", w: "281", c: "transition-metal", r: 7, g: 10, state: "Synthetic", disc: "GSI Darmstadt", desc: "Constructed through heavy-ion fusion routes within Germany, structural characteristics decay completely within milliseconds."},
    {n: 111, s: "Rg", name: "Roentgenium", w: "282", c: "transition-metal", r: 7, g: 11, state: "Synthetic", disc: "GSI Darmstadt", desc: "A highly short-lived synthetic transuranic element, named to recognize Wilhelm Röntgen, the discoverer of X-rays."},
    {n: 112, s: "Cn", name: "Copernicium", w: "285", c: "transition-metal", r: 7, g: 12, state: "Synthetic", disc: "GSI Darmstadt", desc: "A superheavy synthetic element named to honor astronomer Nicolaus Copernicus. Extremely short atomic life expectancy values."},
    {n: 113, s: "Nh", name: "Nihonium", w: "286", c: "post-transition", r: 7, g: 13, state: "Synthetic", disc: "RIKEN Japan", desc: "The first modern element discovered and named by scientific research channels located within Asia (Japan)."},
    {n: 114, s: "Fl", name: "Flerovium", w: "289", c: "post-transition", r: 7, g: 14, state: "Synthetic", disc: "JINR Dubna", desc: "A superheavy synthetic element configured within nuclear research loops. Tracks an extremely brief physical life cycle window."},
    {n: 115, s: "Mc", name: "Moscovium", w: "290", c: "post-transition", r: 7, g: 15, state: "Synthetic", disc: "JINR / LLNL", desc: "An unstable synthetic element named to recognize Moscow Oblast regions where fundamental impact acceleration trials executed."},
    {n: 116, s: "Lv", name: "Livermorium", w: "293", c: "post-transition", r: 7, g: 16, state: "Synthetic", disc: "JINR / LLNL", desc: "A highly radioactive synthetic element named to honor the Lawrence Livermore National Laboratory in California."},
    {n: 117, s: "Ts", name: "Tennessine", w: "294", c: "metalloid", r: 7, g: 17, state: "Synthetic", disc: "JINR / ORNL", desc: "The second-heaviest element on the known periodic system grid, named to acknowledge critical scientific contributions from Tennessee."},
    {n: 118, s: "Og", name: "Oganesson", w: "294", c: "noble-gas", r: 7, g: 18, state: "Synthetic", disc: "JINR / LLNL", desc: "The final element concluding Period 7. It holds the highest atomic number and mass ever recorded in modern physics."}
];

const grid = document.getElementById('grid');
const infoPanel = document.getElementById('info-panel');
const placeholder = document.getElementById('placeholder');
const panelContent = document.getElementById('panel-content');

// Render Grid Matrix
elementsData.forEach(elem => {
    const tile = document.createElement('div');
    
    // Assign structural framework styles 
    tile.className = `element-card ${elem.c}`;
    tile.style.gridColumnStart = elem.g;
    tile.style.gridRowStart = elem.r;

    /* =========================================================================
       FIX: JavaScript Border Restructuring
       Removed: tile.style.borderLeft = `4px solid ${accentColor}`;
       Added: Fetch color token dynamically to paint all 4 borders cleanly
       =========================================================================
    */
    const computedStyles = window.getComputedStyle(document.documentElement);
    const accentColor = computedStyles.getPropertyValue(`--${elem.c}`).trim();
    
    // Force the outline to wrap all 4 sides explicitly with absolute flat corners
    tile.style.border = `2px solid ${accentColor}`;
    tile.style.borderRadius = "0px";
    tile.style.cursor = "pointer";

    // Inject inner textbook nodes
    tile.innerHTML = `
        <div class="atomic-num">${elem.n}</div>
        <div class="symbol" style="color: ${accentColor};">${elem.s}</div>
        <div class="name">${elem.name}</div>
    `;

    // Interaction Tracking Event Dispatcher
    tile.addEventListener('click', () => {
        placeholder.style.display = 'none';
        panelContent.style.display = 'flex';

        // Synchronize lower information panel highlighting states 
        infoPanel.style.borderLeft = `4px solid ${accentColor}`;
        document.getElementById('p-badge').style.borderColor = accentColor;
        document.getElementById('p-badge').style.color = accentColor;
        document.getElementById('p-name').style.color = accentColor;

        // Load structural node metadata attributes
        document.getElementById('p-badge').innerText = elem.s;
        document.getElementById('p-name').innerText = elem.name;
        document.getElementById('p-cat-label').innerText = elem.c.replace('-', ' ').toUpperCase();
        document.getElementById('p-cat-label').style.borderColor = accentColor;
        document.getElementById('p-cat-label').style.color = accentColor;
        document.getElementById('p-desc').innerText = elem.desc;
        document.getElementById('p-num').innerText = elem.n;
        document.getElementById('p-weight').innerText = `${elem.w} u`;
        document.getElementById('p-state').innerText = elem.state;
        document.getElementById('p-disc').innerText = elem.disc;
    });

    grid.appendChild(tile);
});